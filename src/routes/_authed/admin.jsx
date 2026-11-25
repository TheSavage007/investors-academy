import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { base44 } from "@/api/base44Client";
import { Loader2 } from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import StatCard from "@/components/admin/StatCard";
import RequestsTable from "@/components/admin/RequestsTable";
import SubscribersTable from "@/components/admin/SubscribersTable";
import PledgesTable from "@/components/admin/PledgesTable";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authed/admin")({
  ssr: false,
  head: () => ({ meta: [{ title: "Staff dashboard | The Investors Academy" }] }),
  component: AdminPage,
});

function AdminPage() {
  const { user } = Route.useRouteContext();
  const isAdmin = user?.role === "admin";

  const [stats, setStats] = useState(null);
  const [requests, setRequests] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [pledges, setPledges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isAdmin) {
      setLoading(false);
      return;
    }
    let active = true;

    (async () => {
      try {
        const [newCount, allCount, subscriberCount, pledgeAgg, requestPage, subscriberPage, pledgePage] =
          await Promise.all([
            base44.entities.Participant.count({ status: "new" }),
            base44.entities.Participant.count({}),
            base44.entities.Subscriber.count({}),
            base44.entities.DonationPledge.aggregate({ query: {}, groupBy: "frequency", sum: ["amount"] }),
            base44.entities.Participant.filter({}, { sort: "-created_date", limit: 100 }),
            base44.entities.Subscriber.filter({}, { sort: "-created_date", limit: 100 }),
            base44.entities.DonationPledge.filter({}, { sort: "-created_date", limit: 100 }),
          ]);

        if (!active) return;

        const pledged = (pledgeAgg?.rows || []).reduce(
          (total, row) => total + Number(row.sum_amount || 0),
          0
        );

        setStats({ newCount, allCount, subscriberCount, pledged });
        setRequests(requestPage.items || []);
        setSubscribers(subscriberPage.items || []);
        setPledges(pledgePage.items || []);
      } catch (err) {
        if (active) setError("We couldn't load the dashboard data. Please refresh the page.");
      } finally {
        if (active) setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, [isAdmin]);

  async function handleStatusChange(id, status) {
    setRequests((prev) => prev.map((item) => (item.id === id ? { ...item, status } : item)));
    await base44.entities.Participant.update(id, { status });
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background">
        <AdminHeader />
        <div className="mx-auto w-full max-w-3xl px-5 py-20">
          <div className="rounded-2xl border border-border bg-card p-10 text-center">
            <h1 className="font-heading text-2xl text-foreground">Staff access required</h1>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              This dashboard is for staff accounts. Ask an administrator to update your role to admin,
              then sign in again.
            </p>
            <Button asChild variant="outline" className="mt-6 rounded-full">
              <Link to="/">Back to the site</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader />
      <div className="mx-auto w-full max-w-6xl px-5 py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Operations</p>
        <h1 className="mt-3 font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
          Staff dashboard
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Intake requests, mailing list signups and gift pledges from the website.
        </p>

        {loading && (
          <div className="mt-12 flex items-center gap-3 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" /> Loading your data…
          </div>
        )}

        {error && <p className="mt-8 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</p>}

        {!loading && !error && stats && (
          <>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard label="New requests" value={stats.newCount} hint="Waiting for first contact" />
              <StatCard label="All requests" value={stats.allCount} hint="Every intake submission" />
              <StatCard label="Subscribers" value={stats.subscriberCount} hint="Mailing list signups" />
              <StatCard
                label="Pledged"
                value={`$${stats.pledged.toLocaleString("en-US")}`}
                hint="Gifts pledged through the site"
              />
            </div>

            <section className="mt-12">
              <div className="flex items-end justify-between gap-4">
                <h2 className="font-heading text-xl text-foreground">Support requests</h2>
                <Link to="/get-help" className="text-xs text-muted-foreground hover:text-primary">
                  View intake form
                </Link>
              </div>
              <div className="mt-4">
                <RequestsTable requests={requests} onStatusChange={handleStatusChange} />
              </div>
            </section>

            <section className="mt-12">
              <h2 className="font-heading text-xl text-foreground">Mailing list</h2>
              <div className="mt-4">
                <SubscribersTable subscribers={subscribers} />
              </div>
            </section>

            <section className="mt-12">
              <h2 className="font-heading text-xl text-foreground">Gift pledges</h2>
              <div className="mt-4">
                <PledgesTable pledges={pledges} />
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}

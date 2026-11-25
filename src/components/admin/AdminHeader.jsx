import { Link } from "@tanstack/react-router";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Brand from "@/components/site/Brand";
import { useAuth } from "@/lib/AuthContext";

export default function AdminHeader() {
  const { logout } = useAuth();

  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex h-24 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:h-36">
        <Link to="/" aria-label="The Investors Academy home">
          <Brand />
        </Link>
        <div className="flex items-center gap-3">
          <span className="hidden text-xs uppercase tracking-[0.16em] text-muted-foreground sm:block">
            Staff dashboard
          </span>
          <Button variant="outline" size="sm" className="rounded-full" onClick={() => logout()}>
            <LogOut className="mr-2 h-4 w-4" /> Sign out
          </Button>
        </div>
      </div>
    </header>
  );
}

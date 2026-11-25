import { Link } from "@tanstack/react-router";
import { Heart, LifeBuoy } from "lucide-react";

export default function StickyCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-3 py-3 backdrop-blur md:hidden">
      <div className="flex gap-2">
        <Link
          to="/get-help"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border py-3 text-sm font-medium text-foreground"
        >
          <LifeBuoy className="h-4 w-4" /> Get help
        </Link>
        <Link
          to="/donate"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground"
        >
          <Heart className="h-4 w-4" /> Donate
        </Link>
      </div>
    </div>
  );
}

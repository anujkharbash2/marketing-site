import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="/" className="font-medium text-sm tracking-tight">
          DataRey
        </a>
        <nav className="flex items-center gap-4">
          <a href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Docs
          </a>
          <a href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a
            href="http://localhost:5173/login"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
            Sign in
          </a>
        </nav>
      </div>
    </header>
  );
}
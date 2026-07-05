import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ShoppingCart, Building2, Newspaper, ShieldCheck, ArrowRight } from "lucide-react";

const segments = [
  { icon: ShoppingCart, title: "E-commerce", desc: "Price and catalog monitoring" },
  { icon: Building2, title: "B2B / RevOps", desc: "Lead enrichment" },
  { icon: Newspaper, title: "PR agencies", desc: "Media monitoring" },
  { icon: ShieldCheck, title: "Fintech / NBFCs", desc: "Adverse-media checks" },
];

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-20">
      {/* Hero */}
      <section className="text-center mb-10">
        <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
          Structured data API
        </p>
        <h1 className="text-4xl font-medium mb-4 leading-tight tracking-tight">
          Turn any web page into structured data
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-8 text-base leading-relaxed">
  Turn any product or article page into clean, structured JSON — no
  scrapers to write or maintain.
</p>
        <div className="flex gap-3 justify-center">
          <a href="/request-access" className={cn(buttonVariants({ variant: "default", size: "lg" }))}>
  Request access
  <ArrowRight className="ml-1.5" />
</a>
          <a href="/docs" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
            View docs
          </a>
        </div>
      </section>

      {/* Code example */}
      <section className="bg-neutral-950 rounded-xl p-6 mb-14 overflow-x-auto border">
        <pre className="text-neutral-200 text-[13px] leading-relaxed font-mono">
{`curl -X POST api.datarey.com/v1/extract \\
  -H "Authorization: Bearer YOUR_KEY" \\
  -d '{"url": "https://example.com/product/123"}'

`}<span className="text-neutral-500">// returns structured JSON in 1.5-4s</span>
        </pre>
      </section>

      {/* Segments */}
      <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4 text-center">
        Built for
      </p>
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {segments.map((s) => {
          const Icon = s.icon;
          return (
            <Card
              key={s.title}
              className="cursor-pointer hover:border-foreground/30 hover:shadow-sm transition-all"
            >
              <CardContent className="p-4">
                <Icon className="size-5 mb-3 text-muted-foreground" />
                <p className="font-medium text-sm mb-0.5">{s.title}</p>
                <p className="text-xs text-muted-foreground leading-snug">{s.desc}</p>
              </CardContent>
            </Card>
          );
        })}
      </section>
    </main>
  );
}
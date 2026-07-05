import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const segments = [
  {
    icon: "🛒",
    title: "E-commerce",
    desc: "Price and catalog monitoring",
  },
  {
    icon: "🏢",
    title: "B2B / RevOps",
    desc: "Lead enrichment",
  },
  {
    icon: "📰",
    title: "PR agencies",
    desc: "Media monitoring",
  },
  {
    icon: "🛡️",
    title: "Fintech / NBFCs",
    desc: "Adverse-media checks",
  },
];

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center bg-muted rounded-xl px-8 py-12 mb-8">
        <p className="text-sm text-muted-foreground mb-3">DataRey</p>
        <h1 className="text-3xl font-medium mb-3 leading-tight">
          Turn any web page into structured data
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-6">
          The self-serve extract API built and priced for India. No scraper
          maintenance, no USD pricing.
        </p>
        <div className="flex gap-3 justify-center">
          <Button asChild>
            <a href="/signup">Start for free</a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="/docs">View docs</a>
          </Button>
        </div>
      </section>

      {/* Code example */}
      <section className="bg-neutral-900 rounded-xl p-6 mb-8 overflow-x-auto">
        <pre className="text-neutral-200 text-sm leading-relaxed font-mono">
{`curl -X POST api.datarey.com/v1/extract \\
  -H "Authorization: Bearer YOUR_KEY" \\
  -d '{"url": "https://example.com/product/123"}'

// returns structured JSON in 1.5-4s`}
        </pre>
      </section>

      {/* Segments */}
      <p className="text-sm text-muted-foreground mb-3 text-center">Built for</p>
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {segments.map((s) => (
          <Card key={s.title} className="cursor-pointer hover:border-foreground/30 transition-colors">
            <CardContent className="p-4">
              <div className="text-xl mb-2">{s.icon}</div>
              <p className="font-medium text-sm">{s.title}</p>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
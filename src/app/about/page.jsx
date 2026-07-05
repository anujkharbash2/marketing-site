import { Target, Users, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Focused",
    desc: "We do one thing — turn web pages into structured data — and aim to do it better than a general-purpose scraper ever could.",
  },
  {
    icon: Users,
    title: "Partner-led",
    desc: "We're building closely with a small group of early users during our pilot, shaping the product around real, specific needs.",
  },
  {
    icon: ShieldCheck,
    title: "Built responsibly",
    desc: "We respect robots.txt, rate-limit our requests, and take data handling seriously from day one.",
  },
];

export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-20">
      <section className="text-center mb-16">
        <h1 className="text-3xl font-medium mb-4 tracking-tight">
          Structured data shouldn't require a scraping team
        </h1>
        <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
          DataRey turns any product or article page into clean, structured
          JSON — so teams can stop maintaining brittle scrapers and start
          building on top of reliable data.
        </p>
      </section>

      <section className="grid sm:grid-cols-3 gap-6 mb-16">
        {values.map((v) => {
          const Icon = v.icon;
          return (
            <div key={v.title}>
              <Icon className="size-5 mb-3 text-muted-foreground" />
              <p className="font-medium text-sm mb-1.5">{v.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          );
        })}
      </section>

      <section className="border-t pt-10 text-center">
        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          We're early — currently working with a small group of design
          partners to get the product right before opening up more broadly.
        </p>
      </section>
    </main>
  );
}
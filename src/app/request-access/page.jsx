"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

export default function RequestAccess() {
  const [form, setForm] = useState({ name: "", email: "", company_name: "", use_case: "" });
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    const { error } = await supabase.from("access_requests").insert(form);

    if (error) {
      setStatus("error");
    } else {
      setStatus("submitted");
    }
  }

  if (status === "submitted") {
    return (
      <main className="max-w-md mx-auto px-4 py-24 text-center">
        <CheckCircle2 className="size-10 mx-auto mb-4 text-muted-foreground" />
        <h1 className="text-xl font-medium mb-2">Request received</h1>
        <p className="text-muted-foreground text-sm">
          We're onboarding design partners in small batches during our pilot.
          We'll email you if there's a fit.
        </p>
      </main>
    );
  }

  return (
    <main className="max-w-md mx-auto px-4 py-20">
      <h1 className="text-2xl font-medium mb-2 tracking-tight">Request access</h1>
      <p className="text-muted-foreground text-sm mb-8">
        We're currently invite-only while we work closely with early design
        partners. Tell us a bit about your use case.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" required value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <Label htmlFor="email">Work email</Label>
          <Input id="email" type="email" required value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <Label htmlFor="company">Company</Label>
          <Input id="company" value={form.company_name}
            onChange={(e) => setForm({ ...form, company_name: e.target.value })} />
        </div>
        <div>
          <Label htmlFor="use_case">What would you use DataRey for?</Label>
          <Textarea id="use_case" rows={3} value={form.use_case}
            onChange={(e) => setForm({ ...form, use_case: e.target.value })} />
        </div>
        <Button type="submit" className="w-full" disabled={status === "submitting"}>
          {status === "submitting" ? "Submitting..." : "Request access"}
        </Button>
        {status === "error" && (
          <p className="text-sm text-destructive">Something went wrong. Try again.</p>
        )}
      </form>
    </main>
  );
}
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    const { error } = await supabase
      .from("contact_messages")
      .insert(form);

    setStatus(error ? "error" : "submitted");
  }

  if (status === "submitted") {
    return (
      <main className="max-w-md mx-auto px-4 py-24 text-center">
        <CheckCircle2 className="size-10 mx-auto mb-4 text-muted-foreground" />
        <h1 className="text-xl font-medium mb-2">Message sent</h1>
        <p className="text-muted-foreground text-sm">We'll get back to you soon.</p>
      </main>
    );
  }

  return (
    <main className="max-w-md mx-auto px-4 py-20">
      <h1 className="text-2xl font-medium mb-2 tracking-tight">Contact us</h1>
      <p className="text-muted-foreground text-sm mb-8">
        Questions, feedback, or want to talk about a custom plan? Send us a note.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" required value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" rows={4} required value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })} />
        </div>
        <Button type="submit" className="w-full" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send message"}
        </Button>
        {status === "error" && (
          <p className="text-sm text-destructive">Something went wrong. Try again.</p>
        )}
      </form>
    </main>
  );
}
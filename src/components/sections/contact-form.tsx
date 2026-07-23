"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Label } from "@/components/ui/input";

type FormValues = {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  message: string;
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(values: FormValues) {
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setSent(true);
      reset();
    } catch {
      setError("Something went wrong. Please try again or reach us on WhatsApp.");
    }
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-10 text-center shadow-soft">
        <div className="grid size-14 place-items-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-7" />
        </div>
        <h3 className="mt-5 font-display text-xl font-bold text-navy">
          Thanks — we&apos;ll be in touch!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Your message has reached our team. We usually respond within one business
          day.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <Input
            placeholder="Your name"
            aria-invalid={!!errors.name}
            {...register("name", { required: "Name is required" })}
          />
        </Field>
        <Field label="Company name" error={errors.company?.message}>
          <Input placeholder="Company" {...register("company")} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <Input
            type="email"
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: "Enter a valid email" },
            })}
          />
        </Field>
        <Field label="WhatsApp number" error={errors.whatsapp?.message}>
          <Input
            type="tel"
            placeholder="+91 ..."
            {...register("whatsapp")}
          />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Message" error={errors.message?.message}>
          <Textarea
            placeholder="Tell us about your project..."
            aria-invalid={!!errors.message}
            {...register("message", { required: "Please add a short message" })}
          />
        </Field>
      </div>

      {error ? (
        <p className="mt-4 text-sm font-medium text-red-600">{error}</p>
      ) : null}

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Submit
            <Send />
          </>
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label>{label}</Label>
      {children}
      {error ? <p className="mt-1 text-xs text-red-600">{error}</p> : null}
    </div>
  );
}

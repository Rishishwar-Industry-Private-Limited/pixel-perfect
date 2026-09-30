import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/frontend/components/ui/button";
import { openEmail } from "@/frontend/content/company";
import type { FormField } from "@/frontend/content/forms";

const inputCls =
  "mt-2 w-full rounded-md border border-input bg-background px-4 text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary";

type EmailFormProps = {
  fields: FormField[];
  subject: string;
  intro: string;
  submitLabel?: string;
  successText?: string;
  columns?: 1 | 2;
  className?: string;
};

/** Shared form: collects the fields and opens the visitor's email app with a pre-filled message. */
export function EmailForm({
  fields,
  subject,
  intro,
  submitLabel = "Submit Registration",
  successText = "Email app khul gaya hai — message send karke registration complete karein.",
  columns = 2,
  className = "",
}: EmailFormProps) {
  const [v, setV] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = fields.map((f) => `${f.l}: ${(v[f.k] ?? "").trim()}`).join("\n");
    openEmail(`Hello Rishishwar Industry, ${intro}\n\n${body}`, subject);
    setDone(true);
  };

  const grid = columns === 2 ? "sm:grid-cols-2" : "";
  const span = columns === 2 ? "sm:col-span-2" : "";

  return (
    <form onSubmit={submit} className={`grid gap-5 ${grid} ${className}`}>
      {fields.map((f) => {
        const common = {
          required: !f.optional,
          value: v[f.k] ?? "",
          placeholder: f.placeholder,
          onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
            setV({ ...v, [f.k]: e.target.value }),
        };
        return (
          <label key={f.k} className={`block text-sm font-semibold ${f.t === "textarea" || f.wide ? span : ""}`}>
            {f.l}{" "}
            {f.optional ? (
              <span className="font-normal text-muted-foreground">(optional)</span>
            ) : (
              <span className="text-primary">*</span>
            )}
            {f.t === "select" ? (
              <select {...common} className={`${inputCls} h-12`}>
                <option value="">Select…</option>
                {f.opts?.map((o) => <option key={o}>{o}</option>)}
              </select>
            ) : f.t === "textarea" ? (
              <textarea {...common} maxLength={1000} rows={f.rows ?? 3} className={`${inputCls} py-3`} />
            ) : (
              <input
                {...common}
                type={f.t}
                maxLength={f.t === "tel" ? 15 : 150}
                pattern={f.t === "tel" ? "[0-9+ ]{10,15}" : undefined}
                min={f.t === "number" ? 1 : undefined}
                className={`${inputCls} h-12`}
              />
            )}
          </label>
        );
      })}
      <div className={span}>
        <Button type="submit" size="lg" className="h-12 w-full">
          {submitLabel} <Send aria-hidden="true" />
        </Button>
        {done && (
          <p className="mt-3 flex items-center gap-2 text-sm text-primary">
            <CheckCircle2 className="size-4" /> {successText}
          </p>
        )}
      </div>
    </form>
  );
}

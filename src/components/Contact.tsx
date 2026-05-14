import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Nom requis").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  message: z.string().trim().min(1, "Message requis").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast.error(r.error.issues[0].message);
      return;
    }
    setSending(true);
    setTimeout(() => {
      toast.success("Message envoyé. Nous vous répondrons rapidement.");
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 600);
  };

  return (
    <section id="contact" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Contact</span>
          <h2 className="mt-4 text-4xl md:text-5xl">Nous trouver</h2>
          <div className="mx-auto my-8 h-px w-16 bg-gold" />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="reveal space-y-6">
            <div className="aspect-[4/3] w-full overflow-hidden border border-border bg-card">
              <iframe
                title="Studio Zahaa - Carte"
                src="https://www.google.com/maps?q=99+Quai+du+Docteur+Dervaux,+92600+Asni%C3%A8res-sur-Seine&output=embed"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Info label="Adresse" lines={["99 Quai du Docteur Dervaux", "92600 Asnières-sur-Seine"]} />
              <Info label="Commodités" lines={["Parking disponible", "Wi-Fi offert"]} />
            </div>
          </div>

          <form onSubmit={submit} className="reveal space-y-5 border border-border bg-card p-8 md:p-10">
            <h3 className="text-2xl">Écrivez-nous</h3>
            <Field label="Nom">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="w-full border-b border-border bg-transparent py-3 outline-none transition-colors focus:border-gold"
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="w-full border-b border-border bg-transparent py-3 outline-none transition-colors focus:border-gold"
              />
            </Field>
            <Field label="Message">
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={5}
                className="w-full resize-none border-b border-border bg-transparent py-3 outline-none transition-colors focus:border-gold"
              />
            </Field>
            <button
              type="submit"
              disabled={sending}
              className="mt-4 w-full rounded-full bg-noir px-8 py-4 text-sm uppercase tracking-widest text-ivory transition-all hover:bg-noir/90 disabled:opacity-60"
            >
              {sending ? "Envoi…" : "Envoyer"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Info({ label, lines }: { label: string; lines: string[] }) {
  return (
    <div className="border border-border bg-card p-6">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
      {lines.map((l) => (
        <p key={l} className="mt-2 font-serif text-lg">{l}</p>
      ))}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

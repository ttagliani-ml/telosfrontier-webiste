import { useState, type FormEvent } from "react";
import { site } from "../config";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const subject = `New enquiry from ${data.name}${data.company ? `, ${data.company}` : ""}`;

    // No form service configured: hand off to the visitor's email app.
    if (!site.formEndpoint) {
      const body = `${data.message}\n\n${data.name}\n${data.email}${data.company ? `\n${data.company}` : ""}`;
      window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        // _subject sets the email's subject line; replies go to the visitor's "email" field
        body: JSON.stringify({ ...data, _subject: subject }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div className="wrap grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.25rem)] font-bold leading-[0.98] tracking-[-0.03em]">
            Where are <br className="hidden sm:block" />
            you headed?
          </h2>
          <p className="mt-8 max-w-[40ch] text-lg text-chrome">
            Tell us where you want your company to be in 18 months. We will tell you, honestly, how we would get you
            there — and whether we are the right people to do it.
          </p>
          <p className="mt-10 text-smoke">
            Prefer email?{" "}
            <a href={`mailto:${site.contactEmail}`} className="text-bright underline decoration-cyan underline-offset-4 hover:text-cyan">
              {site.contactEmail}
            </a>
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-3">
          {status === "sent" ? (
            <div role="status" className="border-t border-cyan pt-8">
              <p className="font-display text-2xl text-bright">Message sent.</p>
              <p className="mt-3 text-smoke">Thanks — we will reply from {site.contactEmail} shortly.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-8 sm:grid-cols-2">
              <label className="flex flex-col gap-1 text-sm text-smoke">
                Name
                <input name="name" required autoComplete="name" className="field" />
              </label>
              <label className="flex flex-col gap-1 text-sm text-smoke">
                Work email
                <input name="email" type="email" required autoComplete="email" className="field" />
              </label>
              <label className="flex flex-col gap-1 text-sm text-smoke sm:col-span-2">
                Company
                <input name="company" autoComplete="organization" className="field" />
              </label>
              <label className="flex flex-col gap-1 text-sm text-smoke sm:col-span-2">
                What are you trying to achieve?
                <textarea name="message" required rows={4} className="field resize-y" />
              </label>
              {/* spam trap: hidden from people, bots fill it in and Formspree discards the submission */}
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

              <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
                <button type="submit" className="btn-primary" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : site.formEndpoint ? "Send message" : "Write email"}
                </button>
                {!site.formEndpoint && (
                  <p className="text-sm text-smoke">Opens your email app with your message ready to send.</p>
                )}
                {status === "error" && (
                  <p role="alert" className="text-sm text-bright">
                    Your message didn't go through. Email us directly at {site.contactEmail}.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

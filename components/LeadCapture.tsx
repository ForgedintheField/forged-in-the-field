"use client"
import { useState } from "react"

export default function LeadCapture() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const email = data.get("email")

    try {
      const res = await fetch(
        "https://a.klaviyo.com/client/subscriptions/?company_id=VGGeWU",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            data: {
              type: "subscription",
              attributes: { list_id: "UFg6RV", email },
            },
          }),
        }
      )
      setStatus(res.ok ? "ok" : "err")
    } catch {
      setStatus("err")
    }
  }

  return (
    <section className="py-14">
      <div className="mx-auto max-w-[1152px] px-6">
        <div className="rounded-brand border border-stroke bg-card p-8">
          <div className="uppercase tracking-widest font-bold text-accent2">Free guide</div>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Field-Tested Foundations (PDF)</h2>
          <p className="mt-2 text-[#d8d8d6]">4 weeks of drills, movement, and mindset to start strong.</p>

          <form onSubmit={onSubmit} className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
            <input
              name="email"
              type="email"
              required
              placeholder="you@email.com"
              className="rounded-brand border border-[#303133] bg-bg px-3 py-3 text-text outline-none focus:ring-2 focus:ring-accent2/40"
            />
            <button type="submit" className="rounded-brand bg-accent px-5 py-3 font-semibold text-white shadow-brand">
              Get the PDF
            </button>
          </form>

          {status === "ok" && <p className="mt-3 text-green-300">Check your inbox—guide on the way.</p>}
          {status === "err" && <p className="mt-3 text-red-300">Hmm, something went wrong. Try again.</p>}
        </div>
      </div>
    </section>
  )
}
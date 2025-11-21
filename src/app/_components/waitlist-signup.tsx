"use client";

import { useState } from "react";

export function WaitlistSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "exists" | "error"
  >("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong");

      if (data?.status === "exists") {
        setStatus("exists");
        setMessage("You're already on the list. Thanks!");
      } else {
        setStatus("success");
        setMessage("You're on the waitlist. We'll be in touch!");
      }
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || "Failed to join the waitlist.");
    }
  }

  return (
    <section
      className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-40 mb-10"
      aria-labelledby="waitlist-title"
    >
      <div className="bg-white/80 dark:bg-[#1f1a14]/80 border border-[#e6e1d5] dark:border-[#40362b] rounded-xl p-6 shadow-sm">
        <h2
          id="waitlist-title"
          className="text-2xl md:text-3xl font-bold mb-2 text-[#2d1c00] dark:text-[#f5e9d6]"
        >
          Join the waitlist
        </h2>
        <p className="text-[#6b4f1d] dark:text-[#beae9d] mb-4">
          Get updates on development milestones and early access opportunities.
        </p>
        <form
          onSubmit={onSubmit}
          className="flex flex-col sm:flex-row gap-3"
          noValidate
        >
          <label htmlFor="waitlist-email" className="sr-only">
            Email address
          </label>
          <input
            id="waitlist-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-md border border-[#e6e1d5] dark:border-[#40362b] bg-white dark:bg-[#231a10] px-4 py-3 text-[#2d1c00] dark:text-[#f5e9d6] placeholder-[#9b7b3c] focus:outline-none focus:ring-2 focus:ring-[#c2881b]"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-[#c2881b] text-white px-5 py-3 font-semibold shadow-sm hover:bg-[#a67618] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Joining…" : "Join"}
          </button>
        </form>
        {message && (
          <p
            className="mt-3 text-sm text-[#6b4f1d] dark:text-[#beae9d]"
            role={status === "error" ? "alert" : undefined}
          >
            {message}
          </p>
        )}
        <p className="mt-2 text-xs text-[#9b7b3c]">
          We’ll only use your email to contact you about this project.
          Unsubscribe anytime.
        </p>
        <div className="mt-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7b3c] dark:text-[#cfbca7]">
          <span className="h-px w-10 bg-[#d8c7a6] dark:bg-[#3a2b1b]" />
          <span>or</span>
          <span className="h-px w-10 bg-[#d8c7a6] dark:bg-[#3a2b1b]" />
        </div>
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://store.steampowered.com/app/4009620/Tutankhamun__Builders_of_the_Eternal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#171a21] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#2a475e] sm:w-auto"
          >
            <span>Wishlist on</span>
            <img
              src="/assets/images/steam.png"
              alt="Steam"
              className="h-6 w-auto"
            />
          </a>
          <a
            href="https://discord.gg/2m2qch3m"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#5865f2] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#4752c4] sm:w-auto"
          >
            Join our Discord
          </a>
        </div>
      </div>
    </section>
  );
}

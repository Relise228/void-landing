"use client";

import { useState, FormEvent } from "react";
import { track } from "@vercel/analytics";

interface EmailFormProps {
  className?: string;
  buttonText?: string;
  style?: React.CSSProperties;
}

export default function EmailForm({
  className = "",
  buttonText = "Join Waitlist",
  style,
}: EmailFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error("Failed to join waitlist. Please try again.");
      }

      // Track successful waitlist joins in Vercel Analytics
      track("Waitlist_Joined");

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="form-success show">
        &#10003; You&apos;re in the bunker. We&apos;ll be in touch.
      </div>
    );
  }

  return (
    <form className={`email-form ${className}`} onSubmit={handleSubmit} style={style}>
      <input type="email" name="email" placeholder="your@email.com" required disabled={loading} />
      <button type="submit" disabled={loading}>
        {loading ? "..." : buttonText}
      </button>
      {error && <p style={{ color: "#ff4d4d", marginTop: "10px", fontSize: "0.85rem", textAlign: "center" }}>{error}</p>}
    </form>
  );
}

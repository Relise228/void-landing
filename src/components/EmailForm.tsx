"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { track } from "@vercel/analytics";

interface EmailFormProps {
  className?: string;
  buttonText?: string;
  style?: React.CSSProperties;
}

const FEATURES = [
  "Smart Watchlist",
  "Anti-Spoiler Shield",
  "AI Recap",
  "Vibe Search",
  "Mood-Based Schedule",
];

const WATCH_HOURS = [
  "Less than 3 hours",
  "3–7 hours",
  "7–15 hours",
  "15+ hours",
];

function CustomSelect({
  options,
  placeholder,
  value,
  onChange,
  disabled,
}: {
  options: string[];
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className={`cs${open ? " cs--open" : ""}${value ? " cs--filled" : ""}`} ref={ref}>
      <button
        type="button"
        className="cs__trigger"
        onClick={() => !disabled && setOpen(!open)}
        disabled={disabled}
      >
        <span className={value ? "cs__label cs__label--active" : "cs__label"}>
          {value || placeholder}
        </span>
        <svg className="cs__chevron" width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <ul className="cs__menu">
          {options.map((opt) => (
            <li key={opt}>
              <button
                type="button"
                className={`cs__option${value === opt ? " cs__option--selected" : ""}`}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
              >
                {opt}
                {value === opt && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7L6 10L11 4" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function EmailForm({
  className = "",
  buttonText = "Join Waitlist",
  style,
}: EmailFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [feature, setFeature] = useState("");
  const [hours, setHours] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!feature || !hours) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, feature, hours }),
      });

      if (!res.ok) {
        throw new Error("Failed to join waitlist. Please try again.");
      }

      track("Waitlist_Joined", { feature, hours });

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
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
    <form className={`waitlist-form ${className}`} onSubmit={handleSubmit} style={style}>
      <CustomSelect
        options={FEATURES}
        placeholder="Which feature matters most to you?"
        value={feature}
        onChange={setFeature}
        disabled={loading}
      />

      <CustomSelect
        options={WATCH_HOURS}
        placeholder="How many hours/week do you watch?"
        value={hours}
        onChange={setHours}
        disabled={loading}
      />

      <div className="email-row">
        <input type="email" name="email" placeholder="your@email.com" required disabled={loading} />
        <button type="submit" disabled={loading}>
          {loading ? "..." : buttonText}
        </button>
      </div>
      {error && <p className="waitlist-error">{error}</p>}
    </form>
  );
}

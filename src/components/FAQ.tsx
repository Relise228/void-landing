"use client";

import { useState } from "react";

const items = [
  {
    q: "When does Void launch?",
    a: "We're targeting Q3 2026. Waitlist members will be notified first and receive early access.",
  },
  {
    q: "Which dubbing studios and languages will be supported?",
    a: "Launch focuses on English, Russian, and Ukrainian dubs. More studios added based on community demand.",
  },
  {
    q: "How does the Anti-Spoiler Shield work?",
    a: "Our AI model analyzes text context in real time using NLP. It detects plot reveals even without spoiler tags, then blurs them client-side before rendering.",
  },
  {
    q: "Is my data private?",
    a: "Your watchlist and viewing habits are yours. We never sell data. AI features process content, not personal information.",
  },
  {
    q: "Can I use Void on mobile?",
    a: "Yes. Void is built as a PWA — it works on any device, installable from your browser.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="anim" style={{ textAlign: "center" }}>
          <p className="section-label">FAQ</p>
          <h2 className="section-title">
            Frequently Asked <span>Questions</span>
          </h2>
        </div>
        <div className="faq-list">
          {items.map((item, i) => (
            <div
              key={i}
              className={`faq-item anim visible${openIndex === i ? " open" : ""}`}
            >
              <button
                className="faq-q"
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              >
                {item.q}
                <span className="arrow">+</span>
              </button>
              <div className="faq-a">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

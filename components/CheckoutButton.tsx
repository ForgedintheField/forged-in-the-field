// components/CheckoutButton.tsx
"use client";
import React from "react";

export default function CheckoutButton({
  label = "Join now",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  const mightyUrl =
    "https://forged-in-the-field.mn.co/users/onboarding/choose_plan?plan_id=2181032&bundle_token=6917e4dac5c4750a54dc81807a60e910&prefer_signup=true&utm_source=site&utm_medium=cta&utm_campaign=membership";

  function handleClick() {
    // Navigate directly to Mighty Networks checkout page
    window.location.href = mightyUrl;
  }

  return (
    <button
      onClick={handleClick}
      className={`rounded-brand bg-accent px-6 py-3 font-semibold text-white shadow-brand hover:bg-accent2 transition-colors ${className}`}
    >
      {label}
    </button>
  );
}
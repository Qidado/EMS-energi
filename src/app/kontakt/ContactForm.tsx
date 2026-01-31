"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white border border-cream-dark p-10 text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber/10">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-coral"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-black">
          Tak for din besked!
        </h3>
        <p className="mt-2 text-gray-dark">
          Vi vender tilbage til dig hurtigst muligt.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-xl border border-cream-dark bg-white p-4 text-black placeholder:text-gray-dark/60 focus:border-coral focus:ring-1 focus:ring-coral/10 outline-none transition";

  return (
    <div>
      <h2 className="font-serif text-2xl text-black mb-8">
        Send os en besked
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-black"
          >
            Fulde Navn
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Dit fulde navn"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-black"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="din@email.dk"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-black"
          >
            Telefon{" "}
            <span className="font-normal text-gray-dark">(valgfrit)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+45 00 00 00 00"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium text-black"
          >
            Emne
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="" disabled>
              V&aelig;lg et emne
            </option>
            <option value="generel">Generel henvendelse</option>
            <option value="prøvetræning">Book pr&oslash;vetr&aelig;ning</option>
            <option value="medlemskab">Medlemskab</option>
            <option value="samarbejde">Samarbejde</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-black"
          >
            Besked
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Skriv din besked her..."
            className={inputClasses + " resize-none"}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full rounded-full bg-coral px-8 py-3 font-medium text-white transition hover:bg-coral-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sender..." : "Send Besked"}
        </button>
      </form>
    </div>
  );
}

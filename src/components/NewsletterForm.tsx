"use client";

export default function NewsletterForm({
  placeholder,
  submitLabel,
}: {
  placeholder: string;
  submitLabel: string;
}) {
  return (
    <form
      className="mt-5 flex max-w-xs items-center gap-2 border-b border-ivory/25 pb-2 focus-within:border-ivory/60"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        {placeholder}
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder={placeholder}
        className="w-full bg-transparent font-body text-sm text-ivory placeholder:text-ivory/40 focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 font-body text-[11px] uppercase tracking-wider2 text-ivory/70 transition-colors hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {submitLabel}
      </button>
    </form>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col items-center justify-center bg-ivory px-6 text-center">
        <p className="font-body text-xs uppercase tracking-[0.28em] text-stone">404</p>
        <h1 className="mt-4 font-serif text-4xl text-charcoal">
          Page introuvable · Page not found
        </h1>
        <p className="mt-4 max-w-md font-body text-sm text-stone">
          La page que vous cherchez n&apos;existe pas ou plus.
          <br />
          The page you are looking for does not exist.
        </p>
        <Link
          href="/fr"
          className="mt-8 rounded-full bg-charcoal px-7 py-3 font-body text-[13px] uppercase tracking-[0.18em] text-ivory"
        >
          Accueil · Home
        </Link>
      </body>
    </html>
  );
}

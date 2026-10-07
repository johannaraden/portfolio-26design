import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-32 sm:px-8">
      <p className="text-sm tracking-[0.18em] text-ink-2 uppercase">404</p>
      <h1 className="mt-4 font-display text-6xl sm:text-8xl">Lost in translation.</h1>
      <Link href="/" className="mt-10 inline-block rounded-full bg-ink px-6 py-3 text-paper">
        Back to start
      </Link>
    </section>
  );
}

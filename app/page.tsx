export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-navy-900 px-6 py-12 text-white">
      <section className="mx-auto w-full max-w-2xl text-center">
        <div className="mx-auto mb-8 h-px w-28 bg-paris-red" />
        <h1 className="font-display text-4xl font-bold uppercase leading-tight tracking-[0.04em] sm:text-5xl">
          Site temporairement indisponible
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
          Cette page est actuellement en maintenance. Merci de revenir
          ultérieurement.
        </p>
      </section>
    </main>
  );
}

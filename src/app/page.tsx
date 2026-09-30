import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-2xl font-bold text-cyan-400">DevLearn</Link>
        <Link href="/register" className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 hover:bg-cyan-300">S&apos;inscrire</Link>
      </nav>
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20">
        <div className="max-w-3xl">
          <p className="mb-4 font-semibold uppercase tracking-widest text-cyan-400">Apprendre l&apos;informatique autrement</p>
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl">Progressez en informatique, une compétence à la fois.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">DevLearn rassemble des cours, des exercices et des explications simples pour aider chaque apprenant à apprendre le développement.</p>
          <Link href="/register" className="mt-8 inline-block rounded-lg bg-cyan-400 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-300">Commencer gratuitement</Link>
        </div>
        <div className="mt-20 grid gap-5 sm:grid-cols-3">
          {[["Cours structurés", "Apprenez étape par étape."], ["Pratique", "Testez vos connaissances avec des exercices."], ["Communauté", "Posez vos questions et progressez ensemble."]].map(([title, text]) => <article key={title} className="rounded-xl border border-slate-800 bg-slate-900 p-6"><h2 className="text-xl font-bold text-cyan-300">{title}</h2><p className="mt-2 text-slate-400">{text}</p></article>)}
        </div>
      </section>
    </main>
  );
}

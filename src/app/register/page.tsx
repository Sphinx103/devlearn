"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const requirements = [
  ["minLength", "8 caractères minimum"],
  ["lower", "Une lettre minuscule"],
  ["upper", "Une lettre majuscule"],
  ["number", "Un chiffre"],
  ["special", "Un caractère spécial"],
] as const;

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const checks = {
    minLength: form.password.length >= 8,
    lower: /[a-z]/.test(form.password),
    upper: /[A-Z]/.test(form.password),
    number: /[0-9]/.test(form.password),
    special: /[^A-Za-z0-9]/.test(form.password),
  };

  function update(name: string, value: string) { setForm((old) => ({ ...old, [name]: value })); }

  async function submit(event: FormEvent) {
    event.preventDefault(); setMessage(""); setLoading(true);
    try {
      const response = await fetch("/api/auth/register", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await response.json();
      setMessage(response.ok ? "Compte créé avec succès !" : data.error);
      if (response.ok) setForm({ name: "", email: "", password: "", confirmPassword: "" });
    } catch { setMessage("Impossible de contacter le serveur."); } finally { setLoading(false); }
  }

  return <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10"><div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"><Link href="/" className="text-2xl font-bold text-cyan-600">DevLearn</Link><h1 className="mt-8 text-3xl font-bold text-slate-900">Créer un compte</h1><p className="mt-2 text-slate-500">Commencez votre parcours informatique.</p>{message && <p className="mt-5 rounded-lg bg-slate-100 p-3 text-sm text-slate-700">{message}</p>}<form onSubmit={submit} className="mt-6 space-y-4"><Field label="Nom complet" name="name" value={form.name} onChange={update} /><Field label="Adresse email" name="email" type="email" value={form.email} onChange={update} /><Field label="Mot de passe" name="password" type="password" value={form.password} onChange={update} /><ul className="space-y-1 text-sm">{requirements.map(([key, text]) => <li key={key} className={checks[key] ? "text-green-600" : "text-slate-400"}>{checks[key] ? "✓" : "○"} {text}</li>)}</ul><Field label="Confirmer le mot de passe" name="confirmPassword" type="password" value={form.confirmPassword} onChange={update} /><button disabled={loading} className="w-full rounded-lg bg-cyan-600 py-3 font-bold text-white hover:bg-cyan-700 disabled:opacity-50">{loading ? "Création..." : "S'inscrire"}</button></form></div></main>;
}

function Field({ label, name, type = "text", value, onChange }: { label: string; name: string; type?: string; value: string; onChange: (name: string, value: string) => void }) { return <label className="block text-sm font-medium text-slate-700">{label}<input required type={type} value={value} onChange={(event) => onChange(name, event.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100" /></label>; }

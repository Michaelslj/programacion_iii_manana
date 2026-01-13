import React, { useState } from "react";

export default function AreaTriangulo() {
  const [base, setBase] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resultado = (base * altura) / 2;
    alert(`El área del triángulo es: ${resultado}`);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="text-xl font-extrabold">LAB: Form</h2>

        <form onSubmit={submit} className="mt-5 max-w-xl space-y-3">
          <label className="block text-sm font-semibold text-white/80">
            Base
          </label>
          <input
            className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-blue-600/50"
            type="number"
            placeholder="Base"
            value={base}
            onChange={(e) => setBase(Number(e.target.value))}
            required
          />

          <label className="block text-sm font-semibold text-white/80">
            Altura
          </label>
          <input
            className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-blue-600/50"
            type="number"
            placeholder="Altura"
            value={altura}
            onChange={(e) => setAltura(Number(e.target.value))}
            required
          />

          <button
            className="h-11 rounded-xl bg-blue-600 px-5 font-semibold hover:bg-blue-500 transition"
            type="submit"
          >
            Calcular área
          </button>
        </form>
      </div>
    </main>
  );
}

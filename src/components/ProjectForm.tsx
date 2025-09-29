"use client";

import { useEffect, useState } from "react";

interface FormData {
  name: string;
  company: string;
  interest: string;
  budget: string;
  urgency: string;
  referenceUrl: string;
  details: string;
}

const interests = [
  "Páginas Web",
  "Tienda en línea",
  "App móvil",
  "Sistema / CRM",
  "Automatización WhatsApp",
  "Consultoría",
  "Otro",
];

const budgets = [
  "$10,000",
  "$20,000",
  "$50,000",
  "$100,000+",
  "No lo sé",
];

const urgencies = [
  "Lo antes posible",
  "Este mes",
  "1-3 meses",
  "Solo cotizando",
];

export default function ProjectForm({ defaultInterest }: { defaultInterest?: string }) {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    interest: defaultInterest || "",
    budget: "",
    urgency: "",
    referenceUrl: "",
    details: "",
  });

  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (defaultInterest) {
      setForm((prev) => ({ ...prev, interest: defaultInterest }));
    }
  }, [defaultInterest]);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      alert("Por favor ingresa tu nombre");
      return;
    }
    if (!form.budget.trim()) {
      alert("Por favor selecciona tu presupuesto");
      return;
    }

    setSubmitting(true);

    const params = new URLSearchParams();
    params.set("pkg", "Desarrollo Web/App");
    params.set("src", "form");
    params.set("name", form.name);
    if (form.company) params.set("company", form.company);
    if (form.budget) params.set("budget", form.budget);
    if (form.urgency) params.set("urgency", form.urgency);
    if (form.referenceUrl) params.set("ref", form.referenceUrl);
    if (form.details) params.set("details", form.details);

    const target = `/whatsapp-sent?${params.toString()}`;
    window.location.href = target;
  };

  return (
    <section className="relative max-w-3xl mx-auto w-full">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-green-600/20 blur-2xl rounded-3xl" />
      <div className="relative bg-gradient-to-br from-slate-900/80 to-purple-900/60 border border-white/10 rounded-3xl p-4 sm:p-6 lg:p-10 shadow-2xl">
        <div className="mb-6 sm:mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[0.95] bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-fade-in-up mb-4">
            <span className="block">Convertimos tus ideas en</span>
            <span className="text-green-400 animate-pulse drop-shadow-[0_0_20px_rgba(34,197,94,0.4)]">tecnología</span>
          </h1>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-sm text-gray-300 mb-2" htmlFor="name">
              Nombre completo *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={onChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              placeholder="Tu nombre"
              required
            />
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-2" htmlFor="company">
                Empresa (opcional)
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={onChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                placeholder="Nombre de tu empresa"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2" htmlFor="interest">
                ¿Qué necesitas? *
              </label>
              <select
                id="interest"
                name="interest"
                value={form.interest}
                onChange={onChange}
                className="w-full px-4 py-3 bg-slate-800 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                required
              >
                <option value="" className="bg-slate-800 text-white">
                  Selecciona
                </option>
                {interests.map((opt) => (
                  <option key={opt} value={opt} className="bg-slate-800 text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-2" htmlFor="budget">
                Presupuesto *
              </label>
              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={onChange}
                className="w-full px-4 py-3 h-12 bg-slate-800 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 appearance-none"
                required
              >
                <option value="" disabled className="bg-slate-800 text-gray-500">
                  Selecciona
                </option>
                {budgets.map((opt) => (
                  <option key={opt} value={opt} className="bg-slate-800 text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2" htmlFor="urgency">
                Urgencia
              </label>
              <select
                id="urgency"
                name="urgency"
                value={form.urgency}
                onChange={onChange}
                className="w-full px-4 py-3 h-12 bg-slate-800 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 appearance-none"
              >
                <option value="" disabled className="bg-slate-800 text-gray-500">
                  Selecciona
                </option>
                {urgencies.map((opt) => (
                  <option key={opt} value={opt} className="bg-slate-800 text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2" htmlFor="details">
              Objetivos / Detalles del proyecto
            </label>
            <textarea
              id="details"
              name="details"
              rows={5}
              value={form.details}
              onChange={onChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 resize-none"
              placeholder="Cuéntanos qué necesitas, alcance, funcionalidades clave, etc."
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 px-6 py-4 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {submitting ? "Enviando..." : "Cotizar"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

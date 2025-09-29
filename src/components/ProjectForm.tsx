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
  "$10k - $20k MXN",
  "$20k - $50k MXN",
  "$50k - $100k MXN",
  "+$100k MXN",
  "Aún no lo sé",
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
    if (!form.interest.trim()) {
      alert("Por favor selecciona qué necesitas");
      return;
    }

    setSubmitting(true);

    const params = new URLSearchParams();
    params.set("pkg", form.interest);
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
      <div className="relative bg-gradient-to-br from-slate-900/80 to-purple-900/60 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
            Cuéntanos sobre tu proyecto
          </h2>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-2" htmlFor="budget">
                Presupuesto *
              </label>
              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={onChange}
                className="w-full px-4 py-3 bg-slate-800 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              >
                <option value="" className="bg-slate-800 text-white">
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
                className="w-full px-4 py-3 bg-slate-800 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              >
                <option value="" className="bg-slate-800 text-white">
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

              Cotizar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

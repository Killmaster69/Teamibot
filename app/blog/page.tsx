"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, Tag, ArrowRight } from "lucide-react"

const articulos = [
  {
    id: 1,
    titulo: "La importancia de la estimulación multisensorial",
    fecha: "22/02/2024",
    categoria: "Aplicaciones terapéuticas",
    resumen:
      "El desarrollo infantil es un proceso complejo que involucra la interacción de múltiples factores. La estimulación multisensorial ayuda a los niños a mejorar sus habilidades cognitivas, motoras y sociales.",
    color: "bg-primary",
    emoji: "🧠",
  },
  {
    id: 2,
    titulo: "TEAmiBot para el desarrollo psicomotor",
    fecha: "19/02/2024",
    categoria: "Terapia ocupacional",
    resumen:
      "El desarrollo psicomotor en los niños es fundamental. Con TEAmiBot se pueden aplicar ejercicios interactivos que favorecen el desarrollo motor y cognitivo de manera divertida.",
    color: "bg-secondary",
    emoji: "🤸",
  },
  {
    id: 3,
    titulo: "Comunicación asistida con tecnología",
    fecha: "15/02/2024",
    categoria: "Comunicación",
    resumen:
      "La tecnología puede ser una herramienta poderosa para mejorar la comunicación en niños con autismo. Descubre cómo TEAmiBot facilita la expresión y comprensión.",
    color: "bg-accent",
    emoji: "💬",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="mx-4 md:mx-8 mb-8">
        <nav className="bg-white/80 backdrop-blur-md rounded-[2rem] shadow-lg border-2 border-primary/10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🤖</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">TEAmiBot</span>
                <span className="text-xs text-muted-foreground">Tu amigo robot</span>
              </div>
            </Link>

            <div className="flex flex-col md:flex-row items-center gap-2">
              <Link
                href="/"
                className="px-6 py-3 rounded-2xl text-foreground font-medium hover:bg-muted transition-all duration-300"
              >
                Inicio
              </Link>
              <Link href="/blog" className="px-6 py-3 rounded-2xl bg-primary/10 text-primary font-semibold">
                Blog
              </Link>
              <Link
                href="/galeria"
                className="px-6 py-3 rounded-2xl text-foreground font-medium hover:bg-muted transition-all duration-300"
              >
                Galería
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border-2 border-primary/20 mb-4">
            <span className="text-2xl">📚</span>
            <span className="text-sm font-medium text-primary">Recursos educativos</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Blog de TEAmiBot</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Artículos, consejos y recursos sobre terapias y tecnología para niños con autismo
          </p>
        </div>

        <div className="space-y-6">
          {articulos.map((articulo) => (
            <article
              key={articulo.id}
              className="bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-primary/10 group"
            >
              <div className="grid md:grid-cols-[auto_1fr] gap-6 p-8">
                <div
                  className={`${articulo.color} w-24 h-24 rounded-2xl flex items-center justify-center text-5xl shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  {articulo.emoji}
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{articulo.fecha}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-primary" />
                      <span className="text-primary font-medium">{articulo.categoria}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {articulo.titulo}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed text-lg">{articulo.resumen}</p>

                  <Link
                    href={`/blog/${articulo.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Leer más
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary rounded-2xl font-semibold hover:bg-primary hover:text-primary-foreground hover:shadow-xl transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}

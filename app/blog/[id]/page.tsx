"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Tag, Heart } from "lucide-react"

const articulos = [
  {
    id: 1,
    titulo: "La importancia de la estimulación multisensorial",
    fecha: "22/02/2024",
    categoria: "Aplicaciones terapéuticas",
    contenido: `El desarrollo infantil es un proceso complejo que involucra la interacción de múltiples factores. La estimulación multisensorial ayuda a los niños a mejorar sus habilidades cognitivas, motoras y sociales.

La estimulación multisensorial se refiere a la activación de varios sentidos al mismo tiempo: vista, oído, tacto, olfato y gusto. Esta aproximación terapéutica es especialmente beneficiosa para niños con autismo, ya que les permite procesar información de manera más efectiva.

Beneficios principales:
• Mejora la atención y concentración
• Reduce niveles de ansiedad
• Favorece la comunicación
• Estimula el desarrollo motor
• Promueve la exploración segura del entorno

TEAmiBot incorpora elementos multisensoriales en sus actividades, combinando luces, sonidos y movimientos de manera controlada y predecible, lo que resulta ideal para niños con sensibilidad sensorial.`,
    color: "bg-primary",
    emoji: "🧠",
  },
  {
    id: 2,
    titulo: "TEAmiBot para el desarrollo psicomotor",
    fecha: "19/02/2024",
    categoria: "Terapia ocupacional",
    contenido: `El desarrollo psicomotor en los niños es fundamental para su crecimiento integral. Con TEAmiBot se pueden aplicar ejercicios interactivos que favorecen el desarrollo motor y cognitivo de manera divertida y efectiva.

La psicomotricidad integra las interacciones cognitivas, emocionales, simbólicas y sensoriomotrices en la capacidad de ser y de expresarse en un contexto psicosocial. Para niños con autismo, trabajar la psicomotricidad es esencial.

Áreas de trabajo con TEAmiBot:
• Coordinación motora gruesa y fina
• Equilibrio y control postural
• Lateralidad y orientación espacial
• Ritmo y secuenciación
• Imitación de movimientos

Las actividades con TEAmiBot están diseñadas para ser graduales, permitiendo que cada niño avance a su propio ritmo, celebrando cada logro y construyendo confianza en sus capacidades.`,
    color: "bg-secondary",
    emoji: "🤸",
  },
  {
    id: 3,
    titulo: "Comunicación asistida con tecnología",
    fecha: "15/02/2024",
    categoria: "Comunicación",
    contenido: `La tecnología puede ser una herramienta poderosa para mejorar la comunicación en niños con autismo. Descubre cómo TEAmiBot facilita la expresión y comprensión mediante sistemas de comunicación aumentativa y alternativa.

Muchos niños con autismo enfrentan desafíos en la comunicación verbal. La tecnología ofrece alternativas que les permiten expresarse de manera efectiva, reduciendo la frustración y mejorando su calidad de vida.

Estrategias implementadas:
• Sistemas pictográficos (PECS digital)
• Respuestas visuales y auditivas claras
• Rutinas de comunicación predecibles
• Refuerzo positivo inmediato
• Interacciones estructuradas

TEAmiBot actúa como un puente comunicativo, ofreciendo un entorno seguro y sin juicios donde los niños pueden practicar habilidades comunicativas a su propio ritmo, con la paciencia infinita que solo un robot puede ofrecer.`,
    color: "bg-accent",
    emoji: "💬",
  },
]

export default function BlogDetailPage() {
  const params = useParams()
  const articulo = articulos.find((a) => a.id === Number.parseInt(params.id as string))

  if (!articulo) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center space-y-6">
          <div className="text-6xl">😕</div>
          <h1 className="text-3xl font-bold text-foreground">Artículo no encontrado</h1>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-2xl font-semibold hover:shadow-lg transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-4 z-50 mx-4 md:mx-8 mb-8">
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

            <Link
              href="/blog"
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary/10 text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Link>
          </div>
        </nav>
      </header>

      <article className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="mb-12">
          <div
            className={`${articulo.color} rounded-[3rem] p-12 text-center shadow-2xl border-4 border-white/50 space-y-6`}
          >
            <div className="text-7xl animate-gentle-bounce">{articulo.emoji}</div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">{articulo.fecha}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full">
                <Tag className="w-4 h-4" />
                <span className="font-medium">{articulo.categoria}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">{articulo.titulo}</h1>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-lg border-2 border-primary/10">
          <div className="prose prose-lg max-w-none">
            {articulo.contenido.split("\n\n").map((parrafo, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed mb-6 text-lg whitespace-pre-line">
                {parrafo}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t-2 border-primary/10">
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-[2rem] p-8 text-center space-y-4">
              <Heart className="w-12 h-12 text-accent mx-auto" />
              <h3 className="text-2xl font-bold text-foreground">¿Te gustó este artículo?</h3>
              <p className="text-muted-foreground">
                Comparte tu experiencia con TEAmiBot o contáctanos para más información
              </p>
              <button className="px-8 py-4 bg-accent text-accent-foreground rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Contactar
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary rounded-2xl font-semibold hover:bg-primary hover:text-primary-foreground hover:shadow-xl transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Ver todos los artículos
          </Link>
        </div>
      </article>
    </div>
  )
}

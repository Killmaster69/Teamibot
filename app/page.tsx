"use client"

import type React from "react"
import Link from "next/link"
import { Heart, Sparkles, Users, Brain, MessageCircle, TrendingUp, Star, Phone, Globe } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <header className="mx-4 md:mx-8">
        <nav className="bg-white/80 backdrop-blur-md rounded-[2rem] shadow-lg border-2 border-primary/10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <img src="/logo.jpg" alt="Logo TEAmiBot" className="w-10 h-10 object-cover rounded-xl" />
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
              <Link
                href="/blog"
                className="px-6 py-3 rounded-2xl text-foreground font-medium hover:bg-muted transition-all duration-300"
              >
                Blog
              </Link>
              <Link
                href="/galeria"
                className="px-6 py-3 rounded-2xl text-foreground font-medium hover:bg-muted transition-all duration-300"
              >
                Galería
              </Link>
              <Link
                href="#contacto"
                className="px-6 py-3 rounded-2xl bg-accent text-accent-foreground font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Contacto
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full border-2 border-secondary/30">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-secondary-foreground">Tecnología con corazón</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                ¡Hola! Soy <span className="text-primary">TEAmiBot</span> tu nuevo amigo
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Un robot diseñado con mucho cariño para acompañar terapias de estimulación, comunicación e inclusión
                para niños con autismo.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Conocer más
                </button>
                <button className="px-8 py-4 bg-white border-2 border-primary text-primary rounded-2xl font-semibold text-lg hover:bg-primary hover:text-primary-foreground hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Ver actividades
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-[3rem] blur-3xl"></div>
              <div className="relative bg-white rounded-[3rem] p-8 shadow-2xl border-4 border-primary/10">
                <img
                  src="/friendly-robot-with-children-autism-therapy-colorf.jpg"
                  alt="TEAmiBot con niños"
                  className="w-full h-auto rounded-[2rem]"
                />
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-2xl shadow-lg font-bold text-lg animate-gentle-bounce">
                  ¡Estoy aquí para ti! 🌟
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">¿Qué puedo hacer por ti?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Herramientas interactivas diseñadas para mejorar el desarrollo y bienestar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Brain className="w-8 h-8" />}
              title="Integración Sensorial"
              description="Actividades multisensoriales que regulan y reducen la ansiedad"
              color="bg-primary"
            />
            <FeatureCard
              icon={<MessageCircle className="w-8 h-8" />}
              title="Comunicación"
              description="Ejercicios de lenguaje adaptativos e interactivos"
              color="bg-secondary"
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Seguimiento"
              description="Registro detallado del progreso para familias y terapeutas"
              color="bg-accent"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Habilidades Sociales"
              description="Juegos que fomentan la interacción y empatía"
              color="bg-[oklch(0.80_0.10_290)]"
            />
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Conoce mi historia</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <InfoCard
              title="Acerca del Proyecto"
              content="¡Hola! Soy TEAmiBot, un robot diseñado con mucho corazón para acompañar terapias de estimulación, comunicación e inclusión. Nací en Guasave, Sinaloa, gracias al trabajo en equipo de estudiantes y docentes."
              bgColor="bg-[oklch(0.85_0.12_80)]"
              emoji="🎯"
            />
            <InfoCard
              title="¿Qué espero lograr?"
              content="Fortalecer el impacto de las terapias tradicionales mediante tecnología amigable, interactiva y portátil. Facilitar la inclusión educativa y mejorar la comunicación de niños con autismo."
              bgColor="bg-[oklch(0.82_0.10_350)]"
              emoji="🌈"
            />
            <InfoCard
              title="¿Sabías que…?"
              content="Fui diseñado con funciones simples pero poderosas: puedo moverme, emitir sonidos y participar en dinámicas guiadas que apoyan la comunicación y la interacción."
              bgColor="bg-secondary"
              emoji="✨"
            />
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-6xl mx-auto">
          <div id="contacto" className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border-4 border-primary/10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg animate-gentle-bounce">
                <img src="/logo.jpg" alt="Logo TEAmiBot" className="w-12 h-12 object-cover rounded-xl" />
              </div>
              <h3 className="text-3xl font-bold text-primary">TEAmiBot</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Niños con TEA y Robots</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Los niños con TEA suelen mostrar mayor motivación para interactuar con robots que con personas
                  desconocidas. Esto se debe a que los robots ofrecen rutinas claras, lenguaje corporal predecible y sin
                  juicios sociales.
                </p>

                <div className="space-y-3">
                  <BenefitItem text="Reduce la ansiedad social" />
                  <BenefitItem text="Facilita el aprendizaje emocional" />
                  <BenefitItem text="Proporciona rutinas predecibles" />
                  <BenefitItem text="Aumenta la motivación" />
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[2rem] p-6">
                  <img
                    src="/child-with-autism-interacting-with-friendly-robot-.jpg"
                    alt="Niño interactuando con robot"
                    className="w-full h-auto rounded-[1.5rem] shadow-xl"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 animate-gentle-float">
                  <img src="/logo.jpg" alt="Logo TEAmiBot" className="w-16 h-16 object-cover rounded-xl" />
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t-2 border-primary/10">
              <div className="flex flex-col md:flex-row items-center gap-2">
                <div className="flex flex-wrap gap-6 justify-center">
                  <div className="flex items-center gap-3 bg-muted/50 px-6 py-3 rounded-2xl">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">6681847685</span>
                  </div>
                  <div className="flex items-center gap-3 bg-muted/50 px-6 py-3 rounded-2xl">
                    <Globe className="w-5 h-5 text-secondary" />
                    <span className="font-semibold text-foreground">@TEAmibot</span>
                  </div>
                </div>
                <p className="text-lg font-semibold text-primary italic">
                  Tecnología que acompaña, terapia que transforma 💙
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-[3rem] p-8 md:p-12 text-center space-y-6 border-4 border-accent/20 shadow-xl">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg animate-gentle-pulse">
                <Star className="w-10 h-10 text-accent-foreground" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">Invita a TEAmiBot</h3>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Si deseas que TEAmiBot forme parte de tus actividades educativas o terapéuticas, no dudes en comunicarte.
              ¡Estoy listo para seguir aprendiendo y compartir momentos significativos!
            </p>
            <button className="px-10 py-5 bg-accent text-accent-foreground rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
              <Heart className="w-6 h-6" />
              Contáctanos ahora
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 px-4 md:px-8 py-12 mt-16">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
              <img src="/logo.jpg" alt="Logo TEAmiBot" className="w-12 h-12 object-cover rounded-xl" />
            </div>
          </div>
          <p className="text-foreground font-semibold text-lg">
            © 2025 Proyecto TEAmiBot. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground">Hecho con 💙 para niños extraordinarios</p>
          <Link href="/politica" className="text-primary hover:underline font-medium">
            Política de Privacidad
          </Link>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  color,
}: { icon: React.ReactNode; title: string; description: string; color: string }) {
  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-primary/10 group">
      <div
        className={`${color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

function InfoCard({
  title,
  content,
  bgColor,
  emoji,
}: { title: string; content: string; bgColor: string; emoji: string }) {
  return (
    <div
      className={`${bgColor} rounded-[2rem] p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/50`}
    >
      <div className="text-5xl mb-4 animate-gentle-bounce">{emoji}</div>
      <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
      <p className="text-foreground/80 leading-relaxed">{content}</p>
    </div>
  )
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 bg-secondary/10 px-4 py-3 rounded-xl border-2 border-secondary/20">
      <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="font-medium text-foreground">{text}</span>
    </div>
  )
}

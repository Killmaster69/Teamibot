"use client"

import Link from "next/link"
import { ArrowLeft, ImageIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const fotos = [
	{
		id: 1,
		titulo: "Sesión de terapia sensorial",
		imagen: "/child-autism-sensory-therapy-colorful-lights.jpg",
		color: "bg-primary",
	},
	{
		id: 2,
		titulo: "Ejercicios de comunicación",
		imagen: "/child-autism-communication-therapy-robot.jpg",
		color: "bg-secondary",
	},
	{
		id: 3,
		titulo: "Actividades de motricidad",
		imagen: "/child-autism-motor-skills-therapy-movement.jpg",
		color: "bg-accent",
	},
	{
		id: 4,
		titulo: "Juegos de interacción social",
		imagen: "/children-autism-social-interaction-therapy-group.jpg",
		color: "bg-[oklch(0.80_0.10_290)]",
	},
	{
		id: 5,
		titulo: "Terapia con música",
		imagen: "/child-autism-music-therapy-instruments.jpg",
		color: "bg-[oklch(0.82_0.10_350)]",
	},
	{
		id: 6,
		titulo: "Exploración táctil",
		imagen: "/child-autism-tactile-exploration-textures-therapy.jpg",
		color: "bg-[oklch(0.85_0.12_80)]",
	},
]

const imagenesSueltas = [
	"/child-autism-sensory-therapy-colorful-lights.jpg",
	"/child-autism-music-therapy-instruments.jpg",
	"/child-autism-tactile-exploration-textures-therapy.jpg",
	"/child-autism-motor-skills-therapy-movement.jpg",
	"/children-autism-social-interaction-therapy-group.jpg",
	"/child-autism-tactile-exploration-textures-therapy.jpg",
]

function ImageCarousel({ images }: { images: string[] }) {
	const [currentIndex, setCurrentIndex] = useState(0)

	const goToNext = () => {
		setCurrentIndex((prev) => (prev + 1) % images.length)
	}

	const goToPrevious = () => {
		setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
	}

	return (
		<div className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-[3rem] overflow-hidden shadow-xl border-2 border-primary/10 p-8">
			<div className="relative aspect-video overflow-hidden rounded-[2rem] bg-muted/30 flex items-center justify-center">
				<img
					src={images[currentIndex] || "/placeholder.svg"}
					alt={`Imagen ${currentIndex + 1}`}
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Navigation Arrows */}
			<button
				onClick={goToPrevious}
				className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-primary/90 transition-all duration-300"
				aria-label="Imagen anterior"
			>
				<ChevronLeft className="w-8 h-8" />
			</button>

			<button
				onClick={goToNext}
				className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-primary/90 transition-all duration-300"
				aria-label="Siguiente imagen"
			>
				<ChevronRight className="w-8 h-8" />
			</button>

			{/* Dots Indicator */}
			<div className="flex justify-center gap-3 mt-6">
				{images.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={`transition-all duration-300 rounded-full ${
							index === currentIndex
								? "w-12 h-4 bg-primary"
								: "w-4 h-4 bg-primary/30 hover:bg-primary/50"
						}`}
						aria-label={`Ir a imagen ${index + 1}`}
					/>
				))}
			</div>

			{/* Counter */}
			<div className="text-center mt-4">
				<span className="text-lg font-semibold text-muted-foreground">
					{currentIndex + 1} / {images.length}
				</span>
			</div>
		</div>
	)
}

export default function GaleriaPage() {
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
								<span className="text-xl font-bold text-foreground">
									TEAmiBot
								</span>
								<span className="text-xs text-muted-foreground">
									Tu amigo robot
								</span>
							</div>
						</Link>

						<div className="flex items-center gap-2">
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
								className="px-6 py-3 rounded-2xl bg-secondary/10 text-secondary font-semibold"
							>
								Galería
							</Link>
						</div>
					</div>
				</nav>
			</header>

			<div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
				<div className="text-center mb-16 space-y-4">
					<div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full border-2 border-secondary/20 mb-4">
						<ImageIcon className="w-5 h-5 text-secondary" />
						<span className="text-sm font-medium text-secondary">
							Momentos especiales
						</span>
					</div>
					<h1 className="text-4xl md:text-5xl font-bold text-foreground">
						Galería de Actividades
					</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Descubre los momentos mágicos de nuestras sesiones terapéuticas con
						TEAmiBot
					</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{fotos.map((foto) => (
						<div
							key={foto.id}
							className="group relative bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary/10"
						>
							<div className="aspect-square overflow-hidden">
								<img
									src={foto.imagen || "/placeholder.svg"}
									alt={foto.titulo}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								/>
							</div>

							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
									<h3 className="text-xl font-bold mb-2">{foto.titulo}</h3>
									<div className="flex items-center gap-2">
										<div
											className={`w-3 h-3 ${foto.color} rounded-full`}
										></div>
										<span className="text-sm">Ver detalles</span>
									</div>
								</div>
							</div>

							<div className="p-6">
								<h3 className="text-lg font-bold text-foreground">
									{foto.titulo}
								</h3>
							</div>
						</div>
					))}
				</div>

				<section className="mt-16">
					<div className="text-center mb-8 space-y-3">
						<div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full border-2 border-accent/20">
							<span className="text-2xl">🎨</span>
							<span className="text-sm font-medium text-accent">
								Más momentos
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl font-bold text-foreground">
							Galería de Imágenes
						</h2>
						<p className="text-lg text-muted-foreground">
							Explora más momentos especiales con las flechitas
						</p>
					</div>
					<ImageCarousel images={imagenesSueltas} />
				</section>

				<div className="mt-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-[3rem] p-8 md:p-12 text-center space-y-6 border-2 border-primary/10">
					<div className="text-5xl animate-gentle-bounce">📸</div>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground">
						¿Quieres ser parte de nuestra galería?
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Únete a nuestras sesiones y crea momentos inolvidables con TEAmiBot
					</p>
					<button className="px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
						Agendar una sesión
					</button>
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

"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "@/components/icons"

export default function GalleryPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/main-hall-interior.png",
      alt: "Внутри главного зала",
      title: "Головний зал церкви"
    },
    {
      src: "/ceiling-view.png", 
      alt: "Взгляд на потолок",
      title: "Вид на стелю"
    },
    {
      src: "/bell-tower-interior.png",
      alt: "Внутри колокольни", 
      title: "Всередині дзвіниці"
    },
    {
      src: "/bell-tower.png",
      alt: "Колокольня",
      title: "Дзвіниця"
    },
    {
      src: "/front-exterior-view.png",
      alt: "Фронтальный вид снаружи",
      title: "Фронтальний вид ззовні"
    },
    {
      src: "/wardrobe-room.png",
      alt: "Гардеробная",
      title: "Гардеробна кімната"
    },
    {
      src: "/front-door-view.png",
      alt: "Вид ближе к двери",
      title: "Вид ближче до дверей"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary py-8 sm:py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Фотогалерея
          </h1>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto text-sm sm:text-base">
            Перегляньте фотографії нашої прекрасної церкви
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryImages.map((image, index) => (
            <Card 
              key={index} 
              className="overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:scale-105"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative h-48 sm:h-56 md:h-64 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-sm sm:text-base">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage}
                alt="Gallery image"
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

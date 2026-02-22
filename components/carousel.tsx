"use client"

import Link from "next/link"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export type CarouselSize = "small" | "medium" | "large"

const projects = [
  {
    name: "discord-trigger-message",
    description:
      "Locally hosted Python script that uses on-device OCR alongside the Discord gateway to enable one-time, trigger-based messaging.",
    image: "/discord-logo1.jpg",
    tech: ["Python", "Discord API", "Tesseract."],
    link: "https://github.com/8wp/discord-trigger-message",
  },
  {
    name: "guess-who-ai",
    description:
      "Locally hosted Python script that leverages the OpenAI API to implement a dynamic 20-questions style guessing game.",
    image: "/guess-who-ai1.jpg",
    tech: ["Python", "OpenAI"],
    link: "https://github.com/8wp/guess-who-ai",
  },
  {
    name: "colour-conversion-tool",
    description:
      "Locally hosted Python script that upscales images and replaces their backgrounds with a user-defined HEX color.",
    image: "/hex-colour-code1.jpg",
    tech: ["Python"],
    link: "https://github.com/8wp/colour-conversion-tool",
  },
]

export default function CarouselSection() {
  const autoplayPlugin = Autoplay({ delay: 3500, stopOnInteraction: false })

  return (
    <section className="py-10 md:py-16">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Featured Projects
          </h2>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplayPlugin]}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 p-3 flex justify-center"
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full max-w-xs"
                >
                  <Card className="overflow-hidden flex flex-col justify-between transition-transform hover:scale-[1.03] hover:shadow-md">
                    <div className="w-full flex justify-center flex-shrink-0 p-3">
                      <div className="border border-border rounded-md p-1 bg-background w-full flex justify-center">
                        <Image
                          src={project.image}
                          alt={project.name}
                          width={600}
                          height={160}
                          className="max-w-full h-auto object-contain rounded-md"
                        />
                      </div>
                    </div>

                    <CardContent className="flex flex-col flex-grow justify-between p-4 text-center">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          {project.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap justify-center gap-2 mt-auto">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium bg-muted px-2 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
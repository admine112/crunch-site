"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Clock, MapPin, User, CalendarIcon, Users } from "@/components/icons"

type ScheduleEvent = {
  id: number
  title: string
  type: "class" | "sermon" | "event"
  date: string
  time: string
  location: string
  speaker: string
  description: string
  image: string
  capacity?: number
  registered?: number
  tags: string[]
}

export default function SchedulePage() {
  const { t } = useLanguage()
  const [selectedEvent, setSelectedEvent] = useState<ScheduleEvent | null>(null)

  const scheduleEvents: ScheduleEvent[] = t.schedule.eventsList

  const getEventsByType = (type: string) => {
    if (type === "all") return scheduleEvents
    return scheduleEvents.filter((event) => event.type === type)
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "sermon":
        return "bg-primary text-primary-foreground"
      case "class":
        return "bg-blue-500 text-white"
      case "event":
        return "bg-green-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[250px] w-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/30">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 font-serif text-5xl font-bold text-primary">{t.schedule.title}</h1>
            <p className="text-lg text-foreground/80">{t.schedule.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Schedule Content */}
      <section className="container mx-auto px-4 py-16">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 grid w-full max-w-md mx-auto grid-cols-4">
            <TabsTrigger value="all">{t.schedule.filterAll}</TabsTrigger>
            <TabsTrigger value="sermon">{t.schedule.sermons}</TabsTrigger>
            <TabsTrigger value="class">{t.schedule.classes}</TabsTrigger>
            <TabsTrigger value="event">{t.schedule.events}</TabsTrigger>
          </TabsList>

          {["all", "sermon", "class", "event"].map((type) => (
            <TabsContent key={type} value={type} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {getEventsByType(type).map((event) => (
                  <Card
                    key={event.id}
                    className="cursor-pointer overflow-hidden transition-all hover:shadow-lg"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <div className="relative h-48 w-full">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                      <div className="absolute top-4 right-4">
                        <Badge className={getTypeColor(event.type)}>{t.schedule.typeLabels[event.type as keyof typeof t.schedule.typeLabels]}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="mb-3 font-serif text-xl font-semibold">{event.title}</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4" />
                          <span>
                            {new Date(event.date).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{event.speaker}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="mt-4 w-full">
                        {t.schedule.viewDetails}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Event Details Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedEvent && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between gap-4">
                  <DialogTitle className="font-serif text-2xl">{selectedEvent.title}</DialogTitle>
                  <Badge className={getTypeColor(selectedEvent.type)}>{t.schedule.typeLabels[selectedEvent.type as keyof typeof t.schedule.typeLabels]}</Badge>
                </div>
              </DialogHeader>
              <div className="space-y-6">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src={selectedEvent.image || "/placeholder.svg"}
                    alt={selectedEvent.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CalendarIcon className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">{t.schedule.dateLabel}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(selectedEvent.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">{t.schedule.timeLabel}</p>
                        <p className="text-sm text-muted-foreground">{selectedEvent.time}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">{t.schedule.locationLabel}</p>
                        <p className="text-sm text-muted-foreground">{selectedEvent.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">{t.schedule.speakerLabel}</p>
                        <p className="text-sm text-muted-foreground">{selectedEvent.speaker}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {selectedEvent.capacity && (
                  <div className="rounded-lg border p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="font-medium">{t.schedule.registrationLabel}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {t.schedule.registrationStatus.replace("{registered}", String(selectedEvent.registered)).replace("{capacity}", String(selectedEvent.capacity))}
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{
                          width: `${((selectedEvent.registered || 0) / selectedEvent.capacity) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="mb-2 font-semibold">{t.schedule.aboutEvent}</h4>
                  <p className="leading-relaxed text-muted-foreground">{selectedEvent.description}</p>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">{t.schedule.tagsLabel}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 border-t pt-6">
                  <Button className="flex-1">{t.schedule.registerButton}</Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    {t.schedule.addToCalendar}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

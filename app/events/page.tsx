"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon as Calendar, Clock, MapPin, Users } from "@/components/icons"

type Event = {
  id: number
  title: string
  titleUk: string
  titleNl: string
  date: string
  time: string
  location: string
  locationUk: string
  locationNl: string
  description: string
  descriptionUk: string
  descriptionNl: string
  category: string
  attendees: number
  image: string
}

export default function EventsPage() {
  const { t, locale } = useLanguage()
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "Sunday Worship Service",
      titleUk: "Неділя богослужіння",
      titleNl: "Zondagse aanbiddingsdienst",
      date: "2025-11-03",
      time: "10:00 AM",
      location: "Main Hall",
      locationUk: "Головна зала",
      locationNl: "Grote zaal",
      description: "Join us for our weekly worship service with inspiring music, prayer, and biblical teaching. This is a wonderful opportunity to connect with our church community and grow in your faith.",
      descriptionUk: "Приєднайтеся до нас на нашому тижневому богослужінні з натхненною музикою, молитвою та біблійним навчанням. Це чудова можливість для спілкування з нашою церковною громадою та зростання у вірі.",
      descriptionNl: "Sluit je aan bij onze wekelijkse aanbiddingsdienst met inspirerende muziek, gebed en bijbelse onderwijzing. Dit is een prachtige gelegenheid om contact te maken met onze kerkgemeenschap en in je geloof te groeien.",
      category: "Worship",
      attendees: 250,
      image: "/main-hall-interior.png",
    },
    {
      id: 2,
      title: "Bible Study Group",
      titleUk: "Група біблійного вивчення",
      titleNl: "Bijbelstudie groep",
      date: "2025-11-05",
      time: "7:00 PM",
      location: "Fellowship Room",
      locationUk: "Кімната спілкування",
      locationNl: "Gemeenschapszaal",
      description: "Deep dive into Scripture with our community. We explore God's Word together, share insights, and encourage one another in our spiritual journey. All levels of biblical knowledge are welcome.",
      descriptionUk: "Глибоке вивчення Святого Письма з нашою громадою. Ми досліджуємо Слово Божого разом, діліться розумінням та підтримуємо один одного у духовній подорожі. Вітаються всі рівні біблійних знань.",
      descriptionNl: "Diep onderzoek van de Heilige Schrift met onze gemeenschap. We verkennen Gods Woord samen, delen inzichten en moedigen elkaar aan in onze spirituele reis. Alle niveaus van bijbelkennis zijn welkom.",
      category: "Study",
      attendees: 45,
      image: "/bell-tower-interior.png",
    },
    {
      id: 3,
      title: "Youth Meeting",
      titleUk: "Зустріч молоді",
      titleNl: "Jeugdbijeenkomst",
      date: "2025-11-10",
      time: "6:00 PM",
      location: "Youth Center",
      locationUk: "Молодіжний центр",
      locationNl: "Jeugdcentrum",
      description: "A dynamic gathering for young people to connect, worship, and grow together. We feature games, worship music, and meaningful discussions about faith and life. Great food and fellowship included!",
      descriptionUk: "Динамічна зустріч для молодих людей, щоб зв'язатися, поклонятися та зростати разом. Ми пропонуємо ігри, музику поклоніння та змістовні дискусії про віру та життя. Включено чудову їжу та спілкування!",
      descriptionNl: "Een dynamische bijeenkomst voor jongeren om contact te maken, aanbidding en groei samen. We hebben spellen, aanbiddingsmuziek en zinvolle discussies over geloof en leven. Geweldig eten en gezelligheid inbegrepen!",
      category: "Youth",
      attendees: 80,
      image: "/ceiling-view.png",
    },
    {
      id: 4,
      title: "Prayer Night",
      titleUk: "Ніч молитви",
      titleNl: "Gebedsnacht",
      date: "2025-11-17",
      time: "7:30 PM",
      location: "Prayer Chapel",
      locationUk: "Молитовна каплиця",
      locationNl: "Gebedskapel",
      description: "An evening dedicated to intercession and prayer for our community, nation, and world. We'll pray for healing, guidance, and God's kingdom to advance. Come as you are and join us in seeking God's face.",
      descriptionUk: "Вечір, присвячений молитві та заступництву за нашу громаду, країну та світ. Ми молитимемося за зцілення, керівництво та поширення Божого царства. Приходьте такими, якими ви є, і приєднайтеся до нас у пошуку Божого обличчя.",
      descriptionNl: "Een avond gewijd aan voorbede en gebed voor onze gemeenschap, natie en wereld. We zullen bidden voor genezing, leiding en de voortgang van Gods koninkrijk. Kom zoals je bent en sluit je bij ons aan in het zoeken naar Gods aangezicht.",
      category: "Prayer",
      attendees: 60,
      image: "/wardrobe-room.png",
    },
    {
      id: 5,
      title: "Community Outreach",
      titleUk: "Громадська допомога",
      titleNl: "Gemeenschapshulp",
      date: "2025-11-24",
      time: "9:00 AM",
      location: "Community Center",
      locationUk: "Громадський центр",
      locationNl: "Gemeenschapscentrum",
      description: "Join us as we serve our local community through various outreach programs. We'll be helping at the food bank, visiting elderly residents, and spreading God's love through practical service.",
      descriptionUk: "Приєднайтеся до нас, коли ми служимо нашій місцевій громаді через різні програми допомоги. Ми допомагатимемо в продовольчому банку, відвідуватимемо літніх жителів та поширюватимемо Божу любов через практичне служіння.",
      descriptionNl: "Sluit je bij ons aan terwijl we onze lokale gemeenschap dienen door verschillende uitreikprogramma's. We helpen in de voedselbank, bezoeken bejaarde bewoners en verspreiden Gods liefde door praktische dienst.",
      category: "Outreach",
      attendees: 120,
      image: "/front-door-view.png",
    },
  ]

  const pastEvents: Event[] = [
    {
      id: 6,
      title: "Thanksgiving Celebration",
      titleUk: "Святкування подяки",
      titleNl: "Dankzeggingsviering",
      date: "2025-10-26",
      time: "5:00 PM",
      location: "Main Hall",
      locationUk: "Головна зала",
      locationNl: "Grote zaal",
      description: "A wonderful evening of gratitude and celebration with our church family. We shared testimonies, enjoyed a potluck dinner, and gave thanks for God's blessings.",
      descriptionUk: "Чудовий вечір подяки та святкування з нашою церковною сім'єю. Ми поділилися свідченнями, насолоджувалися спільною вечерею та дякували за Божі благословення.",
      descriptionNl: "Een prachtige avond van dankbaarheid en viering met onze kerkfamilie. We deelden getuigenissen, genoten van een gezamenlijke maaltijd en dankten voor Gods zegeningen.",
      category: "Celebration",
      attendees: 200,
      image: "/bell-tower.png",
    },
  ]

  const getEventTitle = (event: Event) => {
    if (locale === "uk") return event.titleUk
    if (locale === "nl") return event.titleNl
    return event.title
  }

  const getEventLocation = (event: Event) => {
    if (locale === "uk") return event.locationUk
    if (locale === "nl") return event.locationNl
    return event.location
  }

  const getEventDescription = (event: Event) => {
    if (locale === "uk") return event.descriptionUk
    if (locale === "nl") return event.descriptionNl
    return event.description
  }

  const EventCard = ({ event }: { event: Event }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full bg-muted">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-white">{getEventTitle(event)}</h3>
            <p className="text-sm text-white/90">{event.category}</p>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{getEventLocation(event)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{event.attendees} {locale === "uk" ? "учасників" : locale === "nl" ? "deelnemers" : "attendees"}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {getEventDescription(event)}
        </p>
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => setSelectedEvent(event)}
        >
          {t.events.detailsButton}
        </Button>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl font-bold text-primary-foreground mb-4">
            {t.events.title}
          </h1>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto">
            {t.events.description}
          </p>
        </div>
      </section>

      {/* Events Content */}
      <section className="container mx-auto px-4 py-16">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="upcoming">{t.events.upcomingTitle}</TabsTrigger>
            <TabsTrigger value="past">{t.events.pastTitle}</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedEvent(null)}>
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="font-serif text-2xl font-bold">{getEventTitle(selectedEvent)}</h2>
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="text-2xl font-bold text-muted-foreground hover:text-foreground"
                >
                  ×
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-semibold">{new Date(selectedEvent.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-semibold">{selectedEvent.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-semibold">{getEventLocation(selectedEvent)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-semibold">{selectedEvent.attendees} {locale === "uk" ? "учасників" : locale === "nl" ? "deelnemers" : "attendees"}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {getEventDescription(selectedEvent)}
              </p>

              <div className="flex gap-3">
                <Button className="flex-1">{t.events.detailsButton}</Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setSelectedEvent(null)}
                >
                  {locale === "uk" ? "Закрити" : locale === "nl" ? "Sluiten" : "Close"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

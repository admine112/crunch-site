"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { MapPin, Clock, Mail, Phone, Send } from "@/components/icons"
import { ChurchMap } from "@/components/church-map"

export default function ContactPage() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubscribing(true)

    // Simulate subscription
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Subscribed!",
      description: "You've been added to our newsletter. Welcome!",
    })

    setIsSubscribing(false)
    ;(e.target as HTMLFormElement).reset()
  }

  const handlePrayerRequest = () => {
    toast({
      title: "Prayer Request",
      description: "We will pray for you. Please contact us directly for personal prayer requests.",
    })
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[250px] w-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/30">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 font-serif text-5xl font-bold text-primary">{t.contact.title}</h1>
            <p className="text-lg text-foreground/80">{t.contact.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold">{t.contact.visitUs}</h3>
              <p className="text-sm text-muted-foreground">{t.footer.address}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold">{t.contact.callUs}</h3>
              <p className="text-sm text-muted-foreground">{t.footer.phone}</p>
              <p className="mt-2 text-xs text-muted-foreground">{t.contact.workingHours}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold">{t.contact.emailUs}</h3>
              <p className="text-sm text-muted-foreground">{t.footer.email}</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form and Map */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl">{t.contact.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.contact.nameLabel}</Label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t.contact.emailLabel}</Label>
                  <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t.contact.callUs} (Optional)</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+31 20 123 4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.messageLabel}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={5}
                    required
                    className="resize-none"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      {t.contact.submitButton}...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      {t.contact.submitButton}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map and Newsletter */}
          <div className="space-y-8">
            {/* Map */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">{t.contact.visitUs}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-secondary">
                  <ChurchMap />
                </div>
                <div className="mt-4 flex items-start gap-3 rounded-lg border p-4">
                  <Clock className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h4 className="mb-2 font-semibold">{t.footer.scheduleServices}</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Sunday: 10:00 AM & 6:00 PM</p>
                      <p>Wednesday: 7:00 PM (Prayer)</p>
                      <p>Friday: 7:00 PM (Youth)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">{t.contact.newsletterTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  {t.contact.newsletterDescription}
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="newsletter-name">Name</Label>
                    <Input id="newsletter-name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newsletter-email">Email</Label>
                    <Input
                      id="newsletter-email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubscribing}>
                    {isSubscribing ? (
                      <>
                        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Subscribing...
                      </>
                    ) : (
                      t.contact.subscribeButton
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prayer Request Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-primary-foreground">{t.contact.prayerTitle}</h2>
          <p className="mb-6 text-primary-foreground/90">
            {t.contact.prayerDescription}
          </p>
          <Button size="lg" variant="secondary" onClick={handlePrayerRequest}>
            {t.contact.prayerButton}
          </Button>
        </div>
      </section>
    </div>
  )
}

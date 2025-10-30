'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft, Search } from '@/components/icons'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center">
        {/* ✅ Семантическая разметка */}
        <header className="mb-8">
          <h1 className="text-9xl font-bold text-primary/20 mb-4" aria-label="Ошибка 404">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Страница не найдена
          </h2>
          <p className="text-muted-foreground">
            К сожалению, запрашиваемая страница не существует или была перемещена.
          </p>
        </header>

        {/* ✅ Навигационные действия */}
        <nav className="space-y-4" aria-label="Навигация после ошибки">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="w-full sm:w-auto">
              <Link href="/" className="inline-flex items-center">
                <Home className="h-4 w-4 mr-2" aria-hidden="true" />
                На главную
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link href="/about" className="inline-flex items-center">
                <Search className="h-4 w-4 mr-2" aria-hidden="true" />
                О церкви
              </Link>
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            className="w-full sm:w-auto"
            aria-label="Вернуться на предыдущую страницу"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4 mr-2" aria-hidden="true" />
            Назад
          </Button>
        </nav>

        {/* ✅ Дополнительная помощь */}
        <footer className="mt-8 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            Возможно, вас заинтересует:
          </p>
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              href="/schedule" 
              className="text-primary hover:text-primary/80 underline underline-offset-4"
            >
              Расписание служб
            </Link>
            <Link 
              href="/events" 
              className="text-primary hover:text-primary/80 underline underline-offset-4"
            >
              События
            </Link>
            <Link 
              href="/contact" 
              className="text-primary hover:text-primary/80 underline underline-offset-4"
            >
              Контакты
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  )
}

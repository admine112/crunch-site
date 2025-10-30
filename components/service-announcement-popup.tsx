'use client'

import { useEffect, useState } from 'react'
import { X } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/language-context'
import Image from 'next/image'

export function ServiceAnnouncementPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined

    // Проверяем, показывали ли уже popup в этой сессии
    const schedulePopup = () => {
      if (typeof window === 'undefined') return
      const shown = sessionStorage.getItem('servicePopupShown')
      if (shown === 'true') return

      timer = setTimeout(() => {
        setIsVisible(true)
        sessionStorage.setItem('servicePopupShown', 'true')
      }, 15000) // 15 секунд
    }

    schedulePopup()

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div 
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300 px-3 py-4 sm:p-4"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-[95vw] sm:max-w-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрытия - улучшенная видимость */}
        <button
          onClick={handleClose}
          className="absolute top-1 right-1 sm:-top-4 sm:-right-4 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-red-500 shadow-2xl hover:bg-red-600 transition-all hover:scale-110 active:scale-95"
          aria-label="Close"
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6 text-white font-bold" strokeWidth={3} />
        </button>

        {/* Контент popup с облаками */}
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
          {/* SVG Облака на фоне */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Облако 1 - большое слева вверху */}
            <div className="absolute top-10 left-5 animate-float-slow opacity-40">
              <svg width="150" height="75" viewBox="0 0 150 75" className="text-white drop-shadow-lg">
                <path
                  d="M22 52 C22 52, 22 22, 45 22 C60 12, 90 12, 105 22 C127 22, 127 52, 127 52 Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Облако 2 - среднее справа вверху */}
            <div className="absolute top-5 right-10 animate-float-medium opacity-50">
              <svg width="120" height="60" viewBox="0 0 120 60" className="text-white drop-shadow-lg">
                <path
                  d="M15 45 C15 45, 15 18, 37 18 C48 9, 72 9, 82 18 C105 18, 105 45, 105 45 Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Облако 3 - маленькое слева внизу */}
            <div className="absolute bottom-20 left-10 animate-float-fast opacity-30">
              <svg width="100" height="50" viewBox="0 0 100 50" className="text-white drop-shadow-lg">
                <path
                  d="M12 38 C12 38, 12 15, 30 15 C40 8, 60 8, 70 15 C88 15, 88 38, 88 38 Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Облако 4 - справа внизу */}
            <div className="absolute bottom-10 right-5 animate-float-slow opacity-35">
              <svg width="130" height="65" viewBox="0 0 130 65" className="text-white drop-shadow-lg">
                <path
                  d="M18 48 C18 48, 18 20, 40 20 C52 10, 78 10, 90 20 C112 20, 112 48, 112 48 Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>

          {/* Текстовый контент */}
          <div className="relative z-10 flex flex-col items-center justify-center p-5 sm:p-10 md:p-12 text-center min-h-[350px] sm:min-h-[500px]">
            <div className="space-y-3 sm:space-y-6 mb-5 sm:mb-8 max-w-full">
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-primary drop-shadow-md leading-tight px-2">
                {t.home.hero}
              </h2>
              <p className="text-base sm:text-xl md:text-2xl font-semibold text-gray-800 px-2 leading-snug">
                Запрошуємо на недільне богослужіння
              </p>
              <div className="space-y-2 text-sm sm:text-lg text-gray-700 font-medium px-2">
                <p className="flex items-center justify-center gap-2 flex-wrap">
                  <span className="text-xl sm:text-2xl">📅</span>
                  <span className="text-sm sm:text-base">Неділя, 10:00 AM</span>
                </p>
                <p className="flex items-center justify-center gap-2 flex-wrap">
                  <span className="text-xl sm:text-2xl">📍</span>
                  <span className="text-xs sm:text-base break-words max-w-[280px] sm:max-w-none">Church Street 15, Munich, Germany</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 w-full sm:w-auto px-2">
              <Button 
                size="lg" 
                className="bg-primary text-white hover:bg-primary/90 active:bg-primary/80 font-semibold px-5 sm:px-8 w-full sm:w-auto text-sm sm:text-lg shadow-lg h-11 sm:h-12"
                onClick={handleClose}
              >
                Дізнатися більше
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary/10 active:bg-primary/20 font-semibold px-5 sm:px-8 w-full sm:w-auto text-sm sm:text-lg h-11 sm:h-12"
                onClick={handleClose}
              >
                Закрити
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Стили для анимации облаков */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-5px); }
          75% { transform: translateY(-15px) translateX(3px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-8px) translateX(-8px); }
          66% { transform: translateY(-12px) translateX(4px); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(-10px); }
        }
        
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
      `}</style>
    </div>
  )
}

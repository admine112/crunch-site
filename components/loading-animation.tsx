'use client'

import { useEffect, useState } from 'react'

export function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Начинаем fade out через 2 секунды
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 2000)

    // Полностью убираем компонент через 2.5 секунды
    const removeTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      style={{ pointerEvents: fadeOut ? 'none' : 'auto' }}
    >
      {/* Облака */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Облако 1 - Большое слева вверху */}
        <div className="absolute top-20 left-10 animate-float-slow">
          <svg width="180" height="90" viewBox="0 0 180 90" className="text-white/60 dark:text-white/30 drop-shadow-lg">
            <path
              d="M30 60 C30 60, 30 30, 60 30 C75 15, 105 15, 120 30 C150 30, 150 60, 150 60 Z"
              fill="currentColor"
              className="animate-pulse"
            />
          </svg>
        </div>

        {/* Облако 2 - Среднее справа вверху */}
        <div className="absolute top-32 right-16 animate-float-medium">
          <svg width="150" height="75" viewBox="0 0 150 75" className="text-white/70 dark:text-white/40 drop-shadow-lg">
            <path
              d="M22 52 C22 52, 22 22, 45 22 C60 12, 90 12, 105 22 C127 22, 127 52, 127 52 Z"
              fill="currentColor"
              className="animate-pulse"
            />
          </svg>
        </div>

        {/* Облако 3 - Маленькое слева внизу */}
        <div className="absolute bottom-32 left-1/4 animate-float-fast">
          <svg width="120" height="60" viewBox="0 0 120 60" className="text-white/65 dark:text-white/35 drop-shadow-lg">
            <path
              d="M15 45 C15 45, 15 18, 37 18 C48 9, 72 9, 82 18 C105 18, 105 45, 105 45 Z"
              fill="currentColor"
              className="animate-pulse"
            />
          </svg>
        </div>

        {/* Облако 4 - Среднее справа по центру */}
        <div className="absolute top-1/2 right-1/4 animate-float-slow">
          <svg width="135" height="67" viewBox="0 0 135 67" className="text-white/55 dark:text-white/25 drop-shadow-lg">
            <path
              d="M18 48 C18 48, 18 21, 42 21 C52 12, 78 12, 90 21 C117 21, 117 48, 117 48 Z"
              fill="currentColor"
              className="animate-pulse"
            />
          </svg>
        </div>

        {/* Облако 5 - Большое в центре */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 animate-float-medium">
          <svg width="200" height="100" viewBox="0 0 200 100" className="text-white/50 dark:text-white/20 drop-shadow-xl">
            <path
              d="M35 70 C35 70, 35 35, 70 35 C87 20, 120 20, 140 35 C175 35, 175 70, 175 70 Z"
              fill="currentColor"
              className="animate-pulse"
            />
          </svg>
        </div>
      </div>

      {/* Центральный контент */}
      <div className="relative z-10 text-center">
        {/* Логотип/Иконка */}
        <div className="mb-8 animate-bounce-gentle">
          <div className="mx-auto w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-2xl">
            <svg width="40" height="40" viewBox="0 0 40 40" className="text-white">
              <rect x="18" y="8" width="4" height="24" fill="currentColor" rx="1"/>
              <rect x="10" y="16" width="20" height="4" fill="currentColor" rx="1"/>
            </svg>
          </div>
        </div>

        {/* Текст */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-primary animate-fade-in-up">
            Light of Hope
          </h1>
          <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-300">
            Where Faith Meets Future
          </p>
        </div>

        {/* Индикатор загрузки */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce animation-delay-0"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce animation-delay-150"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce animation-delay-300"></div>
          </div>
        </div>
      </div>

      {/* Анимация исчезновения */}
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
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
        
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animation-delay-0 { animation-delay: 0ms; }
        .animation-delay-150 { animation-delay: 150ms; }
        .animation-delay-300 { animation-delay: 300ms; }
      `}</style>
    </div>
  )
}

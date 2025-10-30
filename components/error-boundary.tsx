'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle, RefreshCw } from '@/components/icons'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>
}

class ErrorBoundaryClass extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback
        return <FallbackComponent error={this.state.error!} resetError={this.resetError} />
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="max-w-md w-full mx-auto p-6 text-center">
            <div className="mb-6">
              <AlertTriangle className="h-16 w-16 text-destructive mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-foreground mb-2">
                Что-то пошло не так
              </h1>
              <p className="text-muted-foreground mb-4">
                Произошла непредвиденная ошибка. Пожалуйста, попробуйте обновить страницу.
              </p>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-left bg-muted p-4 rounded-lg mb-4">
                  <summary className="cursor-pointer font-medium mb-2">
                    Детали ошибки (только для разработки)
                  </summary>
                  <pre className="text-xs overflow-auto">
                    {this.state.error.stack}
                  </pre>
                </details>
              )}
            </div>
            <div className="space-y-3">
              <Button onClick={this.resetError} className="w-full">
                <RefreshCw className="h-4 w-4 mr-2" />
                Попробовать снова
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/'} 
                className="w-full"
              >
                Вернуться на главную
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// ✅ Функциональная обертка для удобства использования
export function ErrorBoundary({ children, fallback }: ErrorBoundaryProps) {
  return (
    <ErrorBoundaryClass fallback={fallback}>
      {children}
    </ErrorBoundaryClass>
  )
}

// ✅ Компонент для отображения ошибок
export function ErrorFallback({ error, resetError }: { error: Error; resetError: () => void }) {
  return (
    <div role="alert" className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full mx-auto p-6 text-center">
        <AlertTriangle className="h-16 w-16 text-destructive mx-auto mb-4" />
        <h2 className="text-xl font-bold text-foreground mb-2">
          Произошла ошибка
        </h2>
        <p className="text-muted-foreground mb-4">
          {error.message}
        </p>
        <Button onClick={resetError}>
          <RefreshCw className="h-4 w-4 mr-2" />
          Попробовать снова
        </Button>
      </div>
    </div>
  )
}

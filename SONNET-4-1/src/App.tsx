import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { DashboardPage } from "@/components/dashboard-page"

function App() {
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState<'demo' | 'dashboard'>('demo')

  if (currentPage === 'dashboard') {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <DashboardPage />
        <Button
          onClick={() => setCurrentPage('demo')}
          className="fixed bottom-4 left-4"
          variant="outline"
        >
          ← Back to Demo
        </Button>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative min-h-screen">
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>
        <div className="absolute top-4 left-4">
          <Button
            onClick={() => setCurrentPage('dashboard')}
            variant="outline"
          >
            View Dashboard →
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1 className="text-3xl font-bold underline text-blue-600">Vite + React</h1>
          <div className="card">
            <Button 
              onClick={() => setCount((count) => count + 1)}
            >
              count is {count}
            </Button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <div className="flex min-h-20 flex-col items-center justify-center gap-4">
            <Button size="lg" className="text-lg px-8 py-3">
              🧡 Primary Color: #ff7d00
            </Button>
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <span className="text-sm font-medium">🌙 Dark Mode Toggle</span>
              <ModeToggle />
            </div>
            
            {/* Button Variants Test */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              <Button>Primary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>

            {/* Card Component Test */}
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Color Test Card</CardTitle>
                <CardDescription>
                  Testing card colors and text contrast in both light and dark modes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Muted foreground text</p>
                <p className="text-foreground mb-2">Primary foreground text</p>
                <div className="flex gap-2">
                  <Button size="sm">Small Button</Button>
                  <Button size="sm" variant="outline">Outlined</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

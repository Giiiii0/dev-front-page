'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-purple-600 dark:text-purple-400">
            YourLogo
          </Link>
          <ul className="hidden md:flex space-x-6">
            <li><Link href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</Link></li>
          </ul>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link href="/about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link href="/contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 transform transition-all duration-300 hover:scale-105">
          <h1 className="text-3xl font-bold mb-6 text-center text-purple-600 dark:text-purple-400">Contact Us</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message here"
                required
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors">
              Send Message
            </Button>
          </form>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow-md mt-8">
        <div className="container mx-auto px-4 py-6 text-center text-sm">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </footer>
    </div>
  )
}


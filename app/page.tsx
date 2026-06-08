'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MessageSquare, TrendingUp, Lightbulb, FileText, Megaphone, ArrowRight } from 'lucide-react'

const tools = [
  {
    id: 1,
    title: '🤖 AI-assistent',
    description: 'Ställ frågor om ekonomi, affärsidéer och mer',
    href: '/chatt',
    icon: MessageSquare,
    color: 'from-primary-500 to-accent-500',
  },
  {
    id: 2,
    title: '📈 Ekonomi & Investeringar',
    description: 'Sparplan, investeringsstrategi och budgetoptimering',
    href: '/finans',
    icon: TrendingUp,
    color: 'from-accent-500 to-primary-500',
  },
  {
    id: 3,
    title: '💡 Affärsidéer',
    description: 'Generera skräddarsydda affärsidéer för dig',
    href: '/ideas',
    icon: Lightbulb,
    color: 'from-primary-500 to-accent-500',
  },
  {
    id: 4,
    title: '✍️ Innehållsskapare',
    description: 'Skapa innehåll för sociala medier och webb',
    href: '/innehål',
    icon: FileText,
    color: 'from-accent-500 to-primary-500',
  },
  {
    id: 5,
    title: '📣 AI-marknadsföring',
    description: 'Skapa kampanjer och videor för dina produkter',
    href: '/marknadsföring',
    icon: Megaphone,
    color: 'from-primary-500 to-accent-500',
  },
]

const stats = [
  { label: 'AI-modeller', value: '5+' },
  { label: 'Verktyg', value: '5' },
  { label: 'Videogenerering', value: '✓' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Navbar */}
      <nav className="border-b border-dark-700 sticky top-0 z-50 backdrop-blur-md bg-dark-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-rihai bg-clip-text text-transparent">RikAI</div>
          <Link
            href="/chatt"
            className="px-4 py-2 rounded-lg bg-gradient-rihai text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition"
          >
            Kom igång
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold font-syne mb-6">
            Din AI-Assistent för
            <span className="block bg-gradient-rihai bg-clip-text text-transparent mt-2">
              Ekonomi & Affärer
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Få hjälp med sparplaner, affärsidéer, innehållsskapning och marknadsföring - allt på en plats
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-12 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-dark-800 border border-dark-700 rounded-lg p-4">
              <div className="text-2xl font-bold text-accent-400">{stat.value}</div>
              <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 font-syne">5 Kraftfulla Verktyg</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Link href={tool.href}>
                  <div className={`group relative bg-dark-800 border border-dark-700 hover:border-primary-500/50 rounded-xl p-6 cursor-pointer transition-all hover:shadow-xl hover:shadow-primary-500/20`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-${tool.color} bg-gradient-to-r`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary-400 opacity-0 group-hover:opacity-100 transition translate-x-2 group-hover:translate-x-0" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 font-syne">{tool.title}</h3>
                    <p className="text-gray-400 text-sm">{tool.description}</p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-6 font-syne">Redo att börja?</h3>
          <Link
            href="/chatt"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-rihai text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition"
          >
            Starta AI-assistenten <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-dark-700 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          <p>RikAI © 2024 - Byggd för att hjälpa dig lyckas ekonomiskt och affärsmässigt</p>
        </div>
      </footer>
    </div>
  )
}

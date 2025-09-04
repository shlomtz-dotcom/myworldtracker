"use client"
import { useState } from "react"
import CountryList from "../components/CountryList"
import WorldMap from "../components/WorldMap"
import Stats from "../components/Stats"

export default function Home() {
  const [visited, setVisited] = useState<string[]>([])

  const toggleCountry = (country: string) => {
    setVisited((prev) =>
      prev.includes(country)
        ? prev.filter((c) => c !== country)
        : [...prev, country]
    )
  }

  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold">🌍 My World Tracker</h1>
      <Stats visited={visited} />
      <div className="grid md:grid-cols-2 gap-6">
        <CountryList visited={visited} toggleCountry={toggleCountry} />
        <WorldMap visited={visited} toggleCountry={toggleCountry} />
      </div>
    </main>
  )
}
"use client"
import { useState } from "react"

const COUNTRIES = [
  "Argentina", "Australia", "Brazil", "Canada", "China", "France",
  "Germany", "India", "Israel", "Italy", "Japan", "Mexico",
  "South Africa", "Spain", "United Kingdom", "United States"
]

export default function CountryList({
  visited,
  toggleCountry
}: {
  visited: string[]
  toggleCountry: (c: string) => void
}) {
  const [query, setQuery] = useState("")

  const filtered = COUNTRIES.filter((c) =>
    c.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">Countries</h2>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />
      <ul className="space-y-1 max-h-80 overflow-y-auto">
        {filtered.map((c) => (
          <li
            key={c}
            onClick={() => toggleCountry(c)}
            className={`cursor-pointer p-2 rounded ${
              visited.includes(c)
                ? "bg-green-200"
                : "hover:bg-gray-100"
            }`}
          >
            {c}
          </li>
        ))}
      </ul>
    </div>
  )
}
"use client"
import { useEffect, useRef } from "react"
import * as d3 from "d3"
import { feature } from "topojson-client"
import worldData from "../public/world-110m.json"

export default function WorldMap({
  visited,
  toggleCountry
}: {
  visited: string[]
  toggleCountry: (c: string) => void
}) {
  const ref = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const svg = d3.select(ref.current)
    svg.selectAll("*").remove()

    const projection = d3.geoMercator().scale(100).translate([400, 250])
    const path = d3.geoPath().projection(projection)

    const countries = feature(worldData as any, (worldData as any).objects.countries).features

    svg
      .selectAll("path")
      .data(countries)
      .enter()
      .append("path")
      .attr("d", path as any)
      .attr("fill", (d: any) =>
        visited.includes(d.properties.name) ? "#34d399" : "#e5e7eb"
      )
      .attr("stroke", "#999")
      .on("click", (e: any, d: any) => toggleCountry(d.properties.name))
  }, [visited])

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">World Map</h2>
      <svg ref={ref} width={800} height={500}></svg>
    </div>
  )
}
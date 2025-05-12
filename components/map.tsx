"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Corrigir o problema dos ícones do Leaflet no Next.js
const fixLeafletIcon = () => {
  delete (L.Icon.Default.prototype as any)._getIconUrl

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  })
}

interface MapProps {
  center: [number, number]
  zoom?: number
}

export function Map({ center, zoom = 15 }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const leafletMapRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      fixLeafletIcon()

      if (!leafletMapRef.current && mapRef.current) {
        leafletMapRef.current = L.map(mapRef.current).setView(center, zoom)

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(leafletMapRef.current)

        const customIcon = L.divIcon({
          html: `<div class="flex h-8 w-8 items-center justify-center rounded-full bg-molasi-red text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>`,
          className: "",
          iconSize: [32, 32],
          iconAnchor: [16, 32],
        })

        L.marker(center, { icon: customIcon })
          .addTo(leafletMapRef.current)
          .bindPopup("<b>Molasi Food</b><br>Centro Comercial Maria Luísa, Luanda, Angola")
          .openPopup()
      }
    }

    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove()
        leafletMapRef.current = null
      }
    }
  }, [center, zoom])

  return <div ref={mapRef} className="h-full w-full" />
}

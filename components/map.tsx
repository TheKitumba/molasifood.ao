"use client";

import dynamic from "next/dynamic";

// Dynamically import Leaflet with no SSR
const MapComponent = dynamic<MapProps>(
  () => import("@/components/map-component"),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full flex items-center justify-center bg-gray-100">
        Loading map...
      </div>
    ),
  }
);

interface MapProps {
  center: [number, number];
  zoom?: number;
}

export function Map(props: MapProps) {
  return <MapComponent {...props} />;
}

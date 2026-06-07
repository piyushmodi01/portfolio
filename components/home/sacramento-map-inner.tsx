"use client";

import { useEffect, useRef } from "react";
import type { Map } from "leaflet";

const SACRAMENTO = { lat: 38.5816, lng: -121.4944 };
const APPLE_MAPS_URL =
  "https://maps.apple.com/?q=Sacramento,CA&ll=38.5816,-121.4944";

export default function SacramentoMapInner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let cancelled = false;

    import("leaflet").then((L) => {
      // Guard against StrictMode double-invoke and already-initialised containers
      if (cancelled || !containerRef.current) return;
      if ((containerRef.current as HTMLDivElement & { _leaflet_id?: number })._leaflet_id) return;

      import("leaflet/dist/leaflet.css" as string);

      const map = L.map(containerRef.current, {
        center: [SACRAMENTO.lat, SACRAMENTO.lng],
        zoom: 14,
        zoomControl: false,
        scrollWheelZoom: false,
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
        attributionControl: false,
      });

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        { maxZoom: 19 }
      ).addTo(map);

      // Inline styles on the img guarantee fill regardless of CSS load order
      const pinIcon = L.divIcon({
        className: "",
        html: `
          <div class="map-pin-wrapper">
            <div class="map-pin-photo">
              <img
                src="/about/portrait.png"
                alt=""
                style="width:100%;height:100%;object-fit:cover;object-position:top center;display:block;"
              />
            </div>
            <div class="map-pin-needle"></div>
            <div class="map-pin-shadow"></div>
          </div>`,
        iconSize: [52, 80],
        iconAnchor: [26, 80],
      });

      const marker = L.marker([SACRAMENTO.lat, SACRAMENTO.lng], {
        icon: pinIcon,
      }).addTo(map);

      const openMaps = () =>
        window.open(APPLE_MAPS_URL, "_blank", "noopener noreferrer");

      marker.on("click", openMaps);
      map.on("click", openMaps);
      map.getContainer().style.cursor = "pointer";

      mapRef.current = map;
    });

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} className="h-full w-full" />;
}

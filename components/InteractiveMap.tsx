import React, { useEffect, useRef } from 'react';
import * as L from 'leaflet';
import { MAP_LOCATIONS, AMBULANCE_TO_INCIDENT_PATH, INCIDENT_TO_HOSPITAL_PATH } from '../data/mockData';

interface InteractiveMapProps {
  ambulanceProgress: number; // 0.0 to 1.0 (to incident), 1.0 to 2.0 (to hospital)
  incidentStatus: string;
  stageName: string;
}

// Linear interpolation between waypoints
function getInterpolatedPoint(path: [number, number][], t: number): [number, number] {
  if (t <= 0) return path[0];
  if (t >= 1) return path[path.length - 1];

  const totalSegments = path.length - 1;
  const rawIndex = t * totalSegments;
  const index = Math.floor(rawIndex);
  const fraction = rawIndex - index;

  if (index >= totalSegments) return path[totalSegments];

  const p1 = path[index];
  const p2 = path[index + 1];

  const lat = p1[0] + (p2[0] - p1[0]) * fraction;
  const lng = p1[1] + (p2[1] - p1[1]) * fraction;

  return [lat, lng];
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  ambulanceProgress,
  incidentStatus,
  stageName,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const ambulanceMarkerRef = useRef<L.Marker | null>(null);
  const incidentMarkerRef = useRef<L.Marker | null>(null);
  const hospitalMarkerRef = useRef<L.Marker | null>(null);
  const policeMarkerRef = useRef<L.Marker | null>(null);
  const route1PolylineRef = useRef<L.Polyline | null>(null);
  const route2PolylineRef = useRef<L.Polyline | null>(null);

  // Compute current ambulance coordinate
  const currentAmbulanceCoord: [number, number] =
    ambulanceProgress <= 1.0
      ? getInterpolatedPoint(AMBULANCE_TO_INCIDENT_PATH, ambulanceProgress)
      : getInterpolatedPoint(INCIDENT_TO_HOSPITAL_PATH, ambulanceProgress - 1.0);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return; // Already initialized

    // Center map on the incident & responder area
    const map = L.map(mapContainerRef.current, {
      center: [37.7730, -122.4180],
      zoom: 13,
      zoomControl: true,
      attributionControl: false,
    });

    // Dark-themed tile layer (CartoDB Dark Matter with OpenStreetMap data)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      subdomains: 'abcd',
    }).addTo(map);

    // Custom tactical icons
    const incidentIcon = L.divIcon({
      className: 'custom-incident-marker',
      html: `
        <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 34px; height: 34px;">
          <span style="position: absolute; width: 100%; height: 100%; border-radius: 50%; background: rgba(239, 68, 68, 0.4); animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></span>
          <span style="position: absolute; width: 22px; height: 22px; border-radius: 50%; background: #ef4444; border: 2px solid #ffffff; box-shadow: 0 0 14px rgba(239, 68, 68, 0.9);"></span>
          <span style="position: relative; font-size: 11px; font-weight: bold; color: white;">!</span>
        </div>
      `,
      iconSize: [34, 34],
      iconAnchor: [17, 17],
    });

    const ambulanceIcon = L.divIcon({
      className: 'custom-ambulance-marker',
      html: `
        <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 36px; height: 36px;">
          <span style="position: absolute; width: 100%; height: 100%; border-radius: 50%; background: rgba(245, 158, 11, 0.4); animation: ping 2s infinite;"></span>
          <div style="position: relative; width: 28px; height: 28px; border-radius: 8px; background: #f59e0b; border: 2px solid #ffffff; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 16px rgba(245, 158, 11, 0.9);">
            <span style="font-size: 14px; font-weight: 900; color: #000;">✚</span>
          </div>
        </div>
      `,
      iconSize: [36, 36],
      iconAnchor: [18, 18],
    });

    const hospitalIcon = L.divIcon({
      className: 'custom-hospital-marker',
      html: `
        <div style="display: flex; align-items: center; justify-content: center; width: 34px; height: 34px;">
          <div style="width: 28px; height: 28px; border-radius: 8px; background: #10b981; border: 2px solid #ffffff; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 14px rgba(16, 185, 129, 0.8);">
            <span style="font-size: 13px; font-weight: 800; color: #ffffff;">H</span>
          </div>
        </div>
      `,
      iconSize: [34, 34],
      iconAnchor: [17, 17],
    });

    const policeIcon = L.divIcon({
      className: 'custom-police-marker',
      html: `
        <div style="display: flex; align-items: center; justify-content: center; width: 30px; height: 30px;">
          <div style="width: 24px; height: 24px; border-radius: 50%; background: #3b82f6; border: 2px solid #ffffff; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 12px rgba(59, 130, 246, 0.8);">
            <span style="font-size: 11px; font-weight: 800; color: #ffffff;">P</span>
          </div>
        </div>
      `,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });

    // Add Incident Marker
    const incMarker = L.marker([MAP_LOCATIONS.incident.lat, MAP_LOCATIONS.incident.lng], {
      icon: incidentIcon,
      zIndexOffset: 1000,
    })
      .addTo(map)
      .bindPopup(
        `<div style="font-family: sans-serif; color: #000; font-size: 12px;"><strong>🚨 ${MAP_LOCATIONS.incident.title}</strong><br/>Location: ${MAP_LOCATIONS.incident.location}</div>`
      );
    incidentMarkerRef.current = incMarker;

    // Add Ambulance Marker
    const ambMarker = L.marker(currentAmbulanceCoord, {
      icon: ambulanceIcon,
      zIndexOffset: 1200,
    })
      .addTo(map)
      .bindPopup(
        `<div style="font-family: sans-serif; color: #000; font-size: 12px;"><strong>🚑 Unit Medic-04</strong><br/>ALS Trauma Rig</div>`
      );
    ambulanceMarkerRef.current = ambMarker;

    // Add Police Marker
    const polMarker = L.marker([MAP_LOCATIONS.police.lat, MAP_LOCATIONS.police.lng], {
      icon: policeIcon,
      zIndexOffset: 800,
    })
      .addTo(map)
      .bindPopup(
        `<div style="font-family: sans-serif; color: #000; font-size: 12px;"><strong>🚔 Patrol-212</strong><br/>Sector 4 Perimeter Unit</div>`
      );
    policeMarkerRef.current = polMarker;

    // Add Hospital Marker
    const hospMarker = L.marker([MAP_LOCATIONS.hospital.lat, MAP_LOCATIONS.hospital.lng], {
      icon: hospitalIcon,
      zIndexOffset: 900,
    })
      .addTo(map)
      .bindPopup(
        `<div style="font-family: sans-serif; color: #000; font-size: 12px;"><strong>🏥 ${MAP_LOCATIONS.hospital.title}</strong><br/>Trauma Bay #3 Reserved</div>`
      );
    hospitalMarkerRef.current = hospMarker;

    // Draw route polylines
    const route1 = L.polyline(AMBULANCE_TO_INCIDENT_PATH, {
      color: '#f59e0b',
      weight: 4,
      opacity: 0.85,
      dashArray: '8, 8',
    }).addTo(map);
    route1PolylineRef.current = route1;

    const route2 = L.polyline(INCIDENT_TO_HOSPITAL_PATH, {
      color: '#10b981',
      weight: 4,
      opacity: 0.75,
      dashArray: '6, 6',
    }).addTo(map);
    route2PolylineRef.current = route2;

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update ambulance marker when ambulanceProgress changes
  useEffect(() => {
    if (ambulanceMarkerRef.current) {
      ambulanceMarkerRef.current.setLatLng(currentAmbulanceCoord);
    }

    // Dynamic polyline highlighting
    if (route1PolylineRef.current && route2PolylineRef.current) {
      if (ambulanceProgress < 1.0) {
        route1PolylineRef.current.setStyle({ color: '#f59e0b', opacity: 0.95, weight: 5 });
        route2PolylineRef.current.setStyle({ color: '#10b981', opacity: 0.4, weight: 3 });
      } else {
        route1PolylineRef.current.setStyle({ color: '#64748b', opacity: 0.3, weight: 2 });
        route2PolylineRef.current.setStyle({ color: '#10b981', opacity: 0.95, weight: 5 });
      }
    }
  }, [ambulanceProgress, currentAmbulanceCoord]);

  return (
    <div className="relative w-full h-[460px] sm:h-[520px] rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-[#090d16]">
      {/* Real Leaflet Map Container */}
      <div ref={mapContainerRef} className="w-full h-full z-0" />

      {/* Map HUD Legend Overlay */}
      <div className="absolute top-3 left-3 z-[1000] p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1.5 shadow-xl pointer-events-auto">
        <div className="text-[10px] uppercase font-bold tracking-widest text-amber-400 border-b border-slate-800 pb-1 flex items-center justify-between gap-4">
          <span>MISSION MAP HUD</span>
          <span className="text-emerald-400">ONLINE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-sm shadow-red-500" />
          <span>Incident: Main Road Junction</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded bg-amber-500 shadow-sm shadow-amber-500" />
          <span>Ambulance: Unit Medic-04</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
          <span>Police: Patrol-212</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded bg-emerald-500" />
          <span>Hospital: Hospital A (Trauma)</span>
        </div>
      </div>

      {/* Live Map Coordinates Telemetry */}
      <div className="absolute bottom-3 right-3 z-[1000] px-3 py-1.5 rounded-lg bg-slate-950/90 backdrop-blur-md border border-slate-800 text-[10px] font-mono text-slate-400 flex items-center gap-3">
        <span>LAT: {currentAmbulanceCoord[0].toFixed(4)}° N</span>
        <span>LNG: {currentAmbulanceCoord[1].toFixed(4)}° W</span>
        <span className="text-amber-400 font-semibold">{incidentStatus}</span>
      </div>
    </div>
  );
};

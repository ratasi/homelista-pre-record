"use client";

// npm i --save-dev @types/leaflet
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapSearch() {
  const center: L.LatLngExpression = [46.861505, 2.496587];
  const markerPosition: L.LatLngExpression = [43.56295237, 1.46810716];

  return (
    <div className="h-72 mb-5">
      <MapContainer center={center} zoom={6} className="h-64">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={markerPosition}>
          <Popup>Hello world!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

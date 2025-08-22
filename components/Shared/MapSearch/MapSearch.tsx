import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function MapSearch() {
  const center: L.LatLngExpression = [46.861505, 2.496587];
  const markerPosition: L.LatLngExpression = [43.56295237, 1.46810716];

  const customIcon = L.icon({
    iconUrl: "/marker-icon.png", // ruta de tu imagen (colócala en /public)
    iconSize: [120, 60], // tamaño del icono
    popupAnchor: [0, -32], // dónde se abre el popup respecto al icono
  });

  return (
    <div className="h-72 mb-5">
      <MapContainer center={center} zoom={6} className="h-64">
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={markerPosition} icon={customIcon}></Marker>
      </MapContainer>
    </div>
  );
}

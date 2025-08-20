export function MainFeatures() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 ">
      <div>
        <h3 className="text-xl font-bold my-3">Características básicas</h3>
        <ul className="list-disc list-inside text-lg">
          <li>70 m² construidos</li>
          <li>3 habitaciones</li>
          <li>1 baño</li>
          <li>Terraza</li>
          <li>Segunda mano/buen estado</li>
          <li>Calefacción individual</li>
        </ul>
        <h3 className="text-xl font-bold my-3">Edificio</h3>
        <ul className="list-disc list-inside text-lg">
          <li>Planta 4ª exterior</li>
          <li>Sin ascensor</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold my-3">Equipamiento</h3>
        <ul className="list-disc list-inside text-lg">
          <li>Aire acondicionado</li>
        </ul>
        <h3 className="text-xl font-bold my-3">Certificado energético</h3>
        <ul className="list-disc list-inside text-lg">
          <li>Consumo: 181 kWh/m² año</li>
        </ul>
      </div>
    </div>
  );
}

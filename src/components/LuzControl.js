import React from 'react';

export default function LuzControl() {
  const luz = ["apagado", "encendido al 25%", "encendido al 50%", "encendido al 75%", "encendido al 100%"];

  const [intensidad, setIntensidad] = React.useState(0);

  const aumentarIntensidad = () => {
    if (intensidad < luz.length - 1) {
      setIntensidad(intensidad + 1);
    } else {
      // Si está al 100%, al aumentar pasa a "apagado"
      setIntensidad(0);
    }
  };

  const disminuirIntensidad = () => {
    if (intensidad > 0) {
      setIntensidad(intensidad - 1);
    } else {
      // Si está en "apagado", al disminuir pasa al 100%
      setIntensidad(luz.length - 1);
    }
  };

  const resetearIntensidad = () => {
    setIntensidad(0); // Cambia a "apagado"
  };

  return (
    <div>
      <h1>Luz Control</h1>
      <p>Intensidad: {luz[intensidad]}</p>
      {luz[intensidad] === "encendido al 100%" && (
        <img src={process.env.PUBLIC_URL + "/imagenes/on.png"} alt="Encendido" />
      )}
      {luz[intensidad] === "apagado" && (
        <img src={process.env.PUBLIC_URL + "/imagenes/off.png"} alt="Apagado" />
      )}
      <p>
        <button onClick={disminuirIntensidad}>Disminuir</button>
        <button onClick={resetearIntensidad}>Resetear</button>
        <button onClick={aumentarIntensidad}>Aumentar</button>
      </p>
    </div>
  );
}
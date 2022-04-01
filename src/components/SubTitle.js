import { useState } from "react";

const Subtitle = () => {
  const [title, setTitle] = useState("Texto a modificar");

  const handleTitle = () => {
    const h2Title = prompt(
      "Ingresá el título que quieras según las webs que subiste",
    );

    setTitle(h2Title);
  };

  return (
    <>
      <h2>{title}</h2>
      <button onClick={handleTitle}>Cambiar el título</button>
    </>
  );
};

export default Subtitle;

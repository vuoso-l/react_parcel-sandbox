import React, { useState } from "react";
import uniqid from "uniqid";
import "./Sandbox.css";

/* const initialWebList = [{
  id: null,
  titleImage: "Bienestar Integral Postural",
  urlImage:
    "data:image/jpeg;base64,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",
  urlWebpage: "https://www.youtube.com/channel/UCuAXs2idOYqJWVgtA-it-tg",
}]; */

const Sandbox = () => {
  const [title, setTitle] = useState("Texto a modificar");
  const [webList, setWebList] = useState([]);
  const [titleImage, setTitleImage] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [urlWebpage, setUrlWebpage] = useState();

  const handleTitle = () => {
    const h1Title = prompt(
      "Ingresá el título que quieras según las fotos que subiste"
    );
    setTitle(h1Title);
  };

  const addWeb = (e) => {
    e.preventDefault();

    const newWeb = {
      id: uniqid(),
      titleImage: titleImage,
      urlImage: urlImage,
      urlWebpage: urlWebpage,
    };
    
    setWebList([...webList, newWeb]);
    setTitleImage("");
    setUrlImage("");
    setUrlWebpage("");
  };

  return (
    <>
      <header>
        <h1>Parcel SandBox</h1>
      </header>
      <main>
        <h2>{title}</h2>
        <button onClick={handleTitle}>Cambiar el título</button>
        <div className="form-container">
          <h3>Formulario para añadir webs</h3>
          <form onSubmit={(e) => addWeb(e)}>
            <input
              onChange={(e) => {
                setTitleImage(e.target.value);
              }}
              type="text"
              placeholder="Nombre de la web"
              value={titleImage}
            />
            <input
              onChange={(e) => {
                setUrlImage(e.target.value);
              }}
              type="text"
              placeholder="Url imagen de la web"
              value={urlImage}
            />
            <input
              onChange={(e) => {
                setUrlWebpage(e.target.value);
              }}
              type="text"
              placeholder="Dirección de la web"
              value={urlWebpage}
            />
            <input
              className="btn btn-info btn-block"
              type="submit"
              value="Ingresar webPage"
            />
          </form>
        </div>
        <div className="container">
          {webList.map((web) => {
            return (
              <div className="tarjeta" key={web.id}>
                <h3>{web.titleImage}</h3>
                <a href={web.urlWebpage} target="_blank" rel="noreferrer">
                  <img
                    className="imagen"
                    src={web.urlImage}
                    alt={web.titleImage}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Sandbox;

import React, { useState } from "react";
import uniqid from "uniqid";
import Form from "./Form";
import "./Sandbox.css";
import Subtitle from "./SubTitle";

const Sandbox = () => {
  const [webList, setWebList] = useState([]);
  const [titleImage, setTitleImage] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [urlWebpage, setUrlWebpage] = useState("");

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
        <Subtitle />
        <Form
          addWeb={addWeb}
          setTitleImage={setTitleImage}
          titleImage={titleImage}
          setUrlImage={setUrlImage}
          urlImage={urlImage}
          setUrlWebpage={setUrlWebpage}
          urlWebpage={urlWebpage}
        />
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

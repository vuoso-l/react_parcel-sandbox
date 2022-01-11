import React from 'react'

const Form = ({addWeb, setTitleImage, titleImage, setUrlImage, urlImage, setUrlWebpage, urlWebpage}) => {
    return (
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
    )
}

export default Form;

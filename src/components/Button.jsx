import React from "react";
import "../stylesheets/Button.css";



function Boton ({texto, esBotonDeClic, manejarClic}){
    return (
        <button className={esBotonDeClic ? 'boton-clic' : 'boton-reinicio'} onClick={manejarClic}>
            {texto}
        </button>
    )
}

export default Boton;
import React, { Fragment } from 'react';

const Pregunta = () => {
    return (
        <Fragment>
            <h2>Ingrese el presupuesto de esta semana</h2>
            <form>
                <input type="number"
                       name="presupuesto"
                       className="u-full-width" 
                       placeholder="Escriba su presupuesto"/>
                       
                <button type="button" 
                        className="button-primary u-full-width">
                    Ingresar presupuesto
                </button>
            </form>
        </Fragment>
    );
}

export default Pregunta;
import React, { Fragment } from 'react';
import Error from './Error'

const Pregunta = () => {

    const [presupuesto, setPresupuesto] = React.useState(0);
    const [error, setError] = React.useState(false);

    const sendPresupuesto = (e) => {
        e.preventDefault();
        if (presupuesto < 1 || isNaN(presupuesto)) {
            setError(true);
            return;
        }
        setError(false);
        console.log(presupuesto);
    }

    return (
        <Fragment>
            <h2>Ingrese el presupuesto de esta semana</h2>
            {
                error ? <Error message='El presupuesto es incorrecto' />
                      : null
            }
            <form onSubmit={sendPresupuesto}>
                <input type="number"
                    name="presupuesto"
                    className="u-full-width"
                    placeholder="Escriba su presupuesto"
                    onChange={e => setPresupuesto(parseInt(e.target.value))} />

                <button type="submit"
                    className="button-primary u-full-width">
                    Ingresar presupuesto
                </button>
            </form>
        </Fragment>
    );
}

export default Pregunta;
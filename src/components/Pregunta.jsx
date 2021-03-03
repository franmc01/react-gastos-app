import React, { Fragment } from 'react';
import Error from './Error'

const Pregunta = ({setPresupuesto, setRestante, setPregunta}) => {

    const [cantidad, setCantidad] = React.useState(0);
    const [error, setError] = React.useState(false);

    const sendPresupuesto = (e) => {
        e.preventDefault();
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return;
        }

        setError(false);

        setPresupuesto(cantidad);
        setRestante(cantidad);
        setPregunta(false);
    }

    return (
        <Fragment>
            <h2>Ingrese el presupuesto de esta semana</h2>
            {
                error ? <Error message='La cantidad ingresada es incorrecta' />
                      : null
            }
            <form onSubmit={sendPresupuesto}>
                <input type="number"
                    name="cantidad"
                    className="u-full-width"
                    placeholder="Escriba su presupuesto"
                    onChange={e => setCantidad(parseInt(e.target.value))} />

                <button type="submit"
                    className="button-primary u-full-width">
                    Ingresar cantidad
                </button>
            </form>
        </Fragment>
    );
}

export default Pregunta;
import React from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types'


const Formulario = ({ setGasto, setEjecutar }) => {

    const [nombre, setNombre] = React.useState('');
    const [cantidad, setCantidad] = React.useState(0);
    const [tipo, setTipo] = React.useState('')
    const [error, setError] = React.useState(false);

    const agregarGastos = (e) => {
        e.preventDefault();

        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '' || tipo === '') {
            setError(true);
            return;
        }
        setError(false);

        const gasto = {
            nombre,
            cantidad,
            tipo,
            id: shortid.generate()
        }

        setGasto(gasto);
        setEjecutar(true)


        setNombre('');
        setCantidad(0);
        setTipo('');

    }

    return (
        <form onSubmit={agregarGastos}>
            <h2>Agrega tus gastos aquí</h2>
            {
                error ? <Error message='Los campos son obligatorios' />
                    : null
            }
            <div className="campo">
                <label>Tipo de gasto</label>
                <select id="selectList" className="u-full-width" onChange={e=>setTipo(e.target.value)}>
                    <option value=""> -- Seleccione -- </option>
                    <option value="Alimentos y bebidas"> Alimentos y bebidas </option>
                    <option value="Cuentas y pagos"> Cuentas y pagos </option>
                    <option value="Salud e higiene"> Salud e higiene </option>
                    <option value="Transporte"> Trasporte </option>
                    <option value="Ropa y calzado"> Ropa y calzado </option>
                    <option value="Diversion"> Diversión </option>
                    <option value="Otros gastos"> Otros gastos </option>
                </select>
            </div>
            <div className="campo">
                <label> Nombre del gasto </label>
                <input type="text"
                    className="u-full-width"
                    placeholder="Ej. Pizza de "
                    name="nombregasto"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)} />
            </div>
            <div className="campo">
                <label> Cantidad gastada </label>
                <input type="number"
                    className="u-full-width"
                    placeholder="Ej. 100"
                    name="cantidad"
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value))} />
            </div>

            <input type="submit"
                className="button-full u-full-width"
                value="Agregar gasto" />
        </form>
    );
}

Formulario.prototype = {
    setGasto: PropTypes.func.isRequired,
    setEjecutar: PropTypes.func.isRequired
}

export default Formulario;
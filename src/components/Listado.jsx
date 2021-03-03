import React from 'react'
import ItemGasto from './gasto-item'

const Listado = ({ gastos }) => {
    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            <table className="u-full-width">
                <thead>
                    <tr>
                        <th>Tipo de gasto</th>
                        <th>Nombre gasto</th>
                        <th>Cant. gastada</th>
                    </tr>
                </thead>
                <tbody>
                    {gastos.map(gasto => (
                        <ItemGasto key={gasto.id} gasto={gasto} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Listado;
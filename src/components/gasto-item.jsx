import React from 'react';

const ItemGasto = ({gasto}) => {
    return (
        <tr>
            <td>{gasto.tipo}</td>
            <td>{gasto.nombre}</td>
            <td>{gasto.cantidad}</td>
        </tr>
    );
}

export default ItemGasto;
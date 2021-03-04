import React from 'react';
import PropTypes from 'prop-types'


const ItemGasto = ({gasto}) => {
    return (
        <tr>
            <td>{gasto.tipo}</td>
            <td>{gasto.nombre}</td>
            <td>$ {gasto.cantidad}</td>
        </tr>
    );
}

ItemGasto.prototype = {
    gasto: PropTypes.object.isRequired,
}


export default ItemGasto;
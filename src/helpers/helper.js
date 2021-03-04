export const revisarPresupuesto = (presupuesto, restante) => {
    let color;

    if((presupuesto / 4) > restante){
        color = 'alert alert-danger';
    }else if ((presupuesto / 2 > restante)){
        color = 'alert alert-warning';
    }else{
        color = 'alert alert-success';
    }

    return color;
}


import React from 'react';
import Formulario from './components/Fomulario';
import Pregunta from './components/Pregunta'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'

function App() {

  const [presupuesto, setPresupuesto] = React.useState(0);
  const [restante, setRestante] = React.useState(0);
  const [pregunta, setPregunta] = React.useState(true);
  const [gastos, setGastos] = React.useState([]);
  const [gasto, setGasto] = React.useState({});
  const [ejecutar, setEjecutar] = React.useState(false);

  //Con este hook actualizameros el restante
  React.useEffect(() => {
    if (ejecutar) {
      setGastos([...gastos, gasto]);
      const pr = restante - gasto.cantidad;
      setRestante(pr);
      setEjecutar(false)
    }

  }, [gasto, ejecutar, gastos, restante])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {
            pregunta ? (
              <Pregunta setRestante={setRestante}
                setPresupuesto={setPresupuesto}
                setPregunta={setPregunta} />
            ) : (
                <div className="row">
                  <div className="one-half column">
                    <Formulario setGasto={setGasto} setEjecutar={setEjecutar} />
                  </div>
                  <div className="one-half column">
                    <Listado gastos={gastos} />
                    <ControlPresupuesto presupuesto={presupuesto} restante={restante} />
                  </div>
                </div>
              )
          }
        </div>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import Formulario from './components/Fomulario';
import Pregunta from './components/Pregunta'
import Listado from './components/Listado'

function App() {

  const [presupuesto, setPresupuesto] = React.useState(0);
  const [restante, setRestante] = React.useState(0);
  const [pregunta, setPregunta] = React.useState(true);
  const [gastos, setGastos] = React.useState([]);

  //Almacenar gastos
  const agregarNuevosGastos = gasto => {
    setGastos([...gastos, gasto]);
  }

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
                    <Formulario agregarNuevosGastos={agregarNuevosGastos} />
                  </div>
                  <div className="one-half column">
                    <Listado gastos={gastos}/>
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

import Pregunta from './components/Pregunta'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Gasto Semanal</h1>
          <div className="contenido-principal contenido">
            <Pregunta />
          </div>
      </header>
    </div>
  );
}

export default App;

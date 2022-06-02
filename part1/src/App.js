import './App.css';
import Mensaje from './Mensaje.js';

function App() {
  const a = 2
  const b = 3
  
  return (
    <div className="App">
      <Mensaje message='Estamos trabajando' color='yellow'/>
      <h1>Titulo de la App</h1>
      <strong>Estamos trabajando en ello</strong>
      <div>
        <p>El resultado es: </p>
        {a+b}
      </div>    
    </div>
  );
}

export default App;

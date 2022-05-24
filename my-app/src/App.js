import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <label>
            Name:
            <input type="text" name="name" id='name'/>
          </label>

          <label>
            password:
            <input type="text" id='password' />
          </label>
          <button type="submit" onSubmit={pantallaInicio()}>
          enviar
        </button>
        </form>

      
      
      </header>
    </div>
    
  );
}
const pantallaInicio = (name) =>{
  
  console.log('funcion pantalla inicio')
}

export default App;

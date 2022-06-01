import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CryptoPass</h1>
      </header>
      <body className="App-body">
        <div className='container'>
         <Button color="danger">Danger!</Button>
        </div>
      </body>
  </div>

    /*<div className="App">
      <div className="container">
        <h1>
          CryptoPass
        </h1>
        <Button color="danger">Danger!</Button>
      </div>
    </div>*/
  );
}


export default App;

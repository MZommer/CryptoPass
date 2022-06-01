import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, Form, FormGroup, Label,s } from 'reactstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CryptoPass</h1>
      </header>
      <body className="App-body">
        <div className='container'>
          <Form inline>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Label
                className="me-sm-2"
                for="name">
                name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="your name"
                type="name"
              />
            </FormGroup>

            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Label
                className="me-sm-2"
                for="exampleEmail">
                Email
              </Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="crypto@gmail.com"
                type="email"
              />
            </FormGroup>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Label
                className="me-sm-2"
                for="examplePassword"
              >
                Password
              </Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="don't tell!"
                type="password"
              />
            </FormGroup><br></br>
            <Button  color="primary">
              Submit
            </Button>
          </Form>
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

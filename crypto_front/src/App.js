import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, Form, FormGroup, Label, Row, Col } from 'reactstrap';


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
                Name
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
            </FormGroup>
            <FormGroup check inline>
              <Input type="checkbox" />
              <Label check>
                I accept all terms.
              </Label>
            </FormGroup>
            <br></br>

            <Row>
              <Col></Col>
              <Col>
                <Button color="info">sign up</Button>
              </Col>
              <Col>
                <Button color="info" outline>fogot your password?</Button>
              </Col>
              <Col></Col>
            </Row>
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

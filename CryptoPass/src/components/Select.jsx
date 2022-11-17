import Form from 'react-bootstrap/Form';

export default function Select() {
  return (
    <>
        <Form.Label htmlFor="inputPassword5">Cantidad de entradas</Form.Label>
        <Form.Control
            type="number"
            id="inputPassword5"
            aria-describedby="6"
            placeholder="3"
        />
        <Form.Text id="passwordHelpBlock" muted>
           El maximo de entradas son 6
        </Form.Text>
    </>
    
  );
}
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss'

function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formIngresaNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese el nombre de la tarea" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formIngresaDesc">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="text" placeholder="Ingrese la descripcion de la tarea" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Fecha</Form.Label>
        <Form.Control type="date" placeholder="Ingrese la fecha para realizar la tarea" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Formulario;
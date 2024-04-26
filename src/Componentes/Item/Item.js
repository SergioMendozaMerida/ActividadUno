import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss'
import CardText from 'react-bootstrap/esm/CardText';

function Item() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Nombre</Card.Title>
        <Card.Text>Lavar mi Carro</Card.Text>
        <Card.Text>Descripcion</Card.Text>
        <Card.Text>
          Lavar el carro para salir a dar un paseo.
        </Card.Text>
        <Button variant="primary" className='float-left'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
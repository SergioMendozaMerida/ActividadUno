import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss'
import CardText from 'react-bootstrap/esm/CardText';

function Item(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>
          {props.dueDate}
        </Card.Text>
        <Button variant="primary" className='float-left'>Editar</Button>
        <Button variant="primary" className='float-left'>Eliminar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
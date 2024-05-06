import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss'
import CardText from 'react-bootstrap/esm/CardText';
import { useDispatch } from 'react-redux';
import {deleteGoal} from '../../reducers/goalsSlice';


function Item(props) {

  const dispatch = useDispatch();

  const deleteItem = (e) =>{
    e.preventDefault();
    dispatch(deleteGoal(props.id));
  }


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>
          {props.dueDate}
        </Card.Text>
        <Button variant="primary" className='float-left'>Editar</Button>
        <Button variant="primary" className='float-left' onClick={deleteItem}>Eliminar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
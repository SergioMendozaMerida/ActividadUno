import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss'
import CardText from 'react-bootstrap/esm/CardText';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeTodo } from '../../reducers/todoSlice';
import { removeGoal } from '../../reducers/goalsSlice';



function Item(props) {

  const goals = useSelector((state)=>state.goals.value)
  const todo = useSelector((state)=>state.todo.value)
  const optionValue = useSelector(state => state.option.value)
  const dispatch = useDispatch();

  const deleteItem = (e) =>{
    e.preventDefault();

    if (optionValue === 'goals') {
      dispatch(removeGoal(props.id));
    }else if (optionValue === 'todos') {
      dispatch(removeTodo(props.id));
    }
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
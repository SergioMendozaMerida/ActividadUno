import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../reducers/todoSlice';
import { addGoal } from '../../reducers/goalsSlice';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

function Formulario(props) {

  const optionValue = useSelector(state => state.option.value);
  let idAsignada = 0;
  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();

  const dispatch = useDispatch();

  const addItem = (e) =>{
    e.preventDefault();
    
    if (optionValue === 'goals') {
      //idAsignada = goalValue.length + 1;
      dispatch(addGoal({'id':idAsignada,'name':inputRefName.current.value, 'description':inputRefDescription.current.value, 'dueDate':inputRefDueDate.current.value}));
    }else if (optionValue === 'todos') {
      //idAsignada = todoValue.length + 1;
      dispatch(addTodo({'id':idAsignada,'name':inputRefName.current.value, 'description':inputRefDescription.current.value, 'dueDate':inputRefDueDate.current.value}));
    }
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formIngresaNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese el nombre de la tarea" ref={inputRefName}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formIngresaDesc">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="text" placeholder="Ingrese la descripcion de la tarea" ref={inputRefDescription}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Fecha</Form.Label>
        <Form.Control type="date" placeholder="Ingrese la fecha para realizar la tarea" ref={inputRefDueDate}/>
      </Form.Group>

      <Button variant="primary" onClick={addItem} type="submit">
        Add Goal
      </Button>
    </Form>
  );
}

export default Formulario;

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Componentes/Item/Item';
import Menu from './Componentes/Menu/Menu';
import Formulario from './Componentes/Formulario/Formulario';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BtnFormulario from './Componentes/btnFormulario/btnFormulario';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { initAddTodo } from './reducers/todoSlice';
import { useDispatch } from 'react-redux';
import { initAddGoal } from './reducers/goalsSlice';

function App() {

  const goals = useSelector((state)=>state.goals.value)
  const todo = useSelector((state)=>state.todo.value)
  const optionValue = useSelector(state => state.option.value)
  const dispatch = useDispatch();

function initFetch(){
  fetch("http://localhost:3001/tasks/getTasks",{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"123456"
    }
  }).then((response) =>
    response.json()
  ).then((response)=>{
    response.map((task)=>{
      dispatch(initAddTodo(task));
    })
  }).catch(err=>{
      console.log(err)
  })

  fetch("http://localhost:3001/goals/getGoals",{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"123456"
    }
  }).then((response) =>
    response.json()
  ).then((response)=>{
    response.map((goals)=>{
      dispatch(initAddGoal(goals));
    })
  }).catch(err=>{
      console.log(err)
  })

}
useEffect(()=>{
  initFetch();
},[])

  return (
    <div className="App">
      <Menu></Menu>
      <Container>
        <Row>
          <Col xs={0} md={0} className='d-none d-sm-block d-sm-none d-md-block '><Formulario></Formulario></Col>
          <Col xs ={0} sm ={0}>
            <Row className='d-md-none '>
              <div className='bg-transparent overlapping-div '>
                <BtnFormulario className='float-left'></BtnFormulario>
              </div>  
            </Row>
            <Row>
              <div className='crolling'>
                { 
                  optionValue==='goals' &&
                  goals.map((task,index)=>(
                    <Item key={index} id={task.id} name={task.name} description={task.description} dueDate={task.dueDate}/>
                  ))
                }
                {
                  optionValue==='todos' &&
                  todo.map((task,index)=>(
                    <Item key={index} id={task.id} name={task.name} description={task.description} dueDate={task.dueDate}/>
                  ))
                }
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      
      
    </div>
  );
}

export default App;

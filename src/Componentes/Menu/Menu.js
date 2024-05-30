import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Menu.scss";
import { useDispatch } from 'react-redux';
import { changeOption } from '../../reducers/optionSlice';



function Menu() {

  const dispatch = useDispatch();

  const changeOptionGoals = (e)=>{
    e.preventDefault();
    dispatch(changeOption('goals'))
  }

  const changeOptionTodos = (e)=>{
    e.preventDefault();
    dispatch(changeOption('todos'))
  }

  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark">
      <Container>
        <Navbar.Brand href="#home">Todo List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse >
          <Nav>
            <Nav.Link href="#home" onClick={changeOptionTodos}>Tareas</Nav.Link>
            <Nav.Link href="#link" onClick={changeOptionGoals}>Metas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
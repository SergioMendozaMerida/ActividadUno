import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Componentes/Item/Item';
import Menu from './Componentes/Menu/Menu';
import Formulario from './Componentes/Formulario/Formulario';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BtnFormulario from './Componentes/btnFormulario/btnFormulario';

function App() {
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
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      
      
    </div>
  );
}

export default App;

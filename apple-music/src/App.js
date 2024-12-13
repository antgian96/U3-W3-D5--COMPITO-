import './App.css';
import MusicPlayer from './Components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstSection from './Components/firstsection';
import Secondsection from './Components/secondsection';
import Tracks from './Components/thirdsection';
import Sidebar from './Components/sidebar';
import Player from './Components/player';
import Explorer from './Components/explorer';
import Footer from './Components/footer';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App bg-dark">
      <Container fluid>
      
        
        <Row>
          
          <Col xs={12} lg={2} className="d-block d-lg-none">
            <Sidebar />
          </Col>

          
          <Col xs={12} lg={2} className="d-none d-lg-block">
            <Sidebar />
          </Col>
          <Col xs={12} lg={10}>
          <br></br>
          <br></br>
          <br></br>
            <FirstSection />
            <Secondsection />
            <Tracks />
            <Explorer/>
          </Col>

          
         
        </Row>
       
      </Container>
      <hr className='text-white'/>
      <Footer/>
    </div>
  );
}

export default App;

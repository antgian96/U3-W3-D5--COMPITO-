import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGrip, faRadio } from '@fortawesome/free-solid-svg-icons'; 
import MusicPlayer from './navbar'; 
import Player from "./player";

const Sidebar = () => {
  return (
    <div>
      
      <Navbar bg="light" expand="lg" className="d-block d-lg-none fixed-top">
        <Container>
        
          
          <Navbar.Brand href="#home">
            <img src="/logos/music.svg" alt="Logo" width="30" height="30" />
          </Navbar.Brand>

          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <MusicPlayer />
              <Nav.Link href="#home">
                <FontAwesomeIcon icon={faHouse} /> Home
              </Nav.Link>
              <Nav.Link href="#novita">
                <FontAwesomeIcon icon={faGrip} /> Novità
              </Nav.Link>
              <Nav.Link href="#radio">
                <FontAwesomeIcon icon={faRadio} /> Radio
              </Nav.Link>
              <Player/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sidebar desktop: visibile solo su schermi grandi */}
      <Container className="text-start d-none d-lg-block text-light">
        <Row>
       
          <Col>
          
            <img src="/logos/music.svg" alt="Logo" />
            <MusicPlayer />
            <p>
              <FontAwesomeIcon icon={faHouse} /> Home
            </p>
            <p>
              <FontAwesomeIcon icon={faGrip} /> Novità
            </p>
            <p>
              <FontAwesomeIcon icon={faRadio} /> Radio
            </p>
            <Player/>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sidebar;

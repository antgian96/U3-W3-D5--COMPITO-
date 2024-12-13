import React from "react";
import { Container, Row, Col } from "react-bootstrap";  


const FirstSection = () => {
  return (
    <Container>
        <h1 className="text-start text-light">Novità</h1>
      <Row>
        <Col className="text-start text-light"><span>NUOVA STAZIONE RADIO</span><p>Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill.</p><img src="/images/1a.png" alt="" className="img-fluid"/></Col>
        <Col className="text-start text-light"><span>NUOVA STAZIONE RADIO</span><p>Ecco la nuova casa della musica latina.   
          </p><img src="/images/1b.png" alt="" className="img-fluid"/></Col>
      </Row>
    </Container>
  );
};

export default FirstSection;

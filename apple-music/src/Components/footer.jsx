import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer =() => {
    return (
        <Container className="text-center text-light"> 
        <Row>
          <Col>Italia | English (UK)</Col>
         
          
        </Row>
        <Row>
          <Col>Copyright 2024 Apple Inc. Tutti i diritti riservati</Col>
          
        </Row>
        <Row>
          <Col>Condizioni dei servizi internet</Col>
          <Col>Apple Music e privacy</Col>
          <Col>Avviso sui cookie</Col>
          <Col>Supporto</Col>
          <Col>Feedback</Col>
        </Row>
      </Container>
    )
}

export default Footer
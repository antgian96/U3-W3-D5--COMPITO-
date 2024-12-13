import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Secondsection = () => {
    return (
        <Container className="text-start text-light">
            <h2>Nuovi episodi radio</h2>
          <Row>
        <Col><img src="/images/2a.png" alt="Prologo con Abuelo"className="card-img-top" />
<p>Prologo con Abuelo</p></Col>
        <Col><img src="/images/2b.png" alt="" className="card-img-top text-light"/><p>The Wanderer</p></Col>
        <Col><img src="/images/2c.png" alt="" className="card-img-top text-light"/><p>Michael Buble & Carly Pearce</p></Col>
        <Col><img src="/images/2d.png" alt=""className="card-img-top text-light" /><p>Stephan Moccio: The Zane Lowe Interview</p></Col>
        <Col><img src="/images/2e.png" alt="" className="card-img-top text-light"/><p>Chart Spotlight: Julia Michaels</p></Col>

      </Row>
    </Container>
    )
}

export default Secondsection
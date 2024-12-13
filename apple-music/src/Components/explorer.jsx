import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Explorer = () => {
    return (
        <><h3 className="text-start text-light">Altro da esplorare</h3><Container className="text-start text-light">
            <Row>
                <Col>Esplora per genere</Col>
                <Col>Worldwide</Col>
                <Col>Video Musicali</Col>
            </Row>
            <Row>
                <Col>Decenni</Col>
                <Col>Classifiche</Col>
                <Col>Nuovi Artisti</Col>
            </Row>
            <Row>
                <Col>Attività e stati d'animo</Col>
                <Col>Audio Spaziale</Col>
                <Col>Hit Del Passato</Col>
            </Row>
        </Container></>
    )
}

export default Explorer
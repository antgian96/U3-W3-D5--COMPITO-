import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackCard from "./trackcard";

const Tracks = () => {
  // Stato per memorizzare i dati delle tracce
  const [tracks, setTracks] = useState([]);

  // Lista di termini di ricerca casuali (artisti, generi, ecc.)
  const searchTerms = [
    "techno", "pop", "rock", "hip hop", "classical", "jazz", "electronic", "indie", "rap"
  ];

  // Funzione per ottenere le tracce tramite API
  const fetchTracks = async () => {
    try {
      // Scelgo un termine di ricerca casuale dalla lista, in maniera tale che ogni volta la pagina si popola di canzoni diverse
      const randomTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];

      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${randomTerm}`
      );
      const data = await response.json();
      setTracks(data.data); // Imposto i dati delle tracce in stato
      console.log("Termine di ricerca:", randomTerm); // Log del termine di ricerca
    } catch (error) {
      console.error("Errore nella ricerca delle tracce:", error);
    }
  };

  // useEffect per chiamare la funzione fetchTracks al caricamento del componente
  useEffect(() => {
    fetchTracks(); // Chiamata per ottenere tracce di musica in base a un termine casuale
  }, []); 

  return (
    <Container className="text-start text-light">
      <h2>Nuove Uscite</h2>
      {tracks.length > 0 ? (
        <Row>
          {tracks.slice(0, 12).map((track) => (
            <Col key={track.id} xs={4} sm={6} md={4} lg={2} className="g-4">
              <TrackCard track={track} />
            </Col>
          ))}
        </Row>
      ) : (
        <p>Nessuna traccia trovata</p> // Messaggio nel caso non ci siano tracce
      )}
    </Container>
  );
};

export default Tracks;

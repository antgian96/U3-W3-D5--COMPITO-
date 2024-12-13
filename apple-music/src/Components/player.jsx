import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { togglePlay, setVolume, toggleRepeat } from "../redux/playerSlice";

const Player = () => {
  const dispatch = useDispatch();
  const audioRef = useRef(null); // Riferimento per l'oggetto audio
  const { currentTrack, isPlaying, volume, repeat } = useSelector((state) => state.player);

  useEffect(() => {
    // Se cambia la traccia
    if (currentTrack) {
      if (audioRef.current) {
        // Se c'è un audio già in riproduzione, lo ferma prima di caricare quello nuovo
        audioRef.current.pause();
        audioRef.current = null;
      }

      // Crea un nuovo oggetto audio solo quando viene selezionata una traccia
      audioRef.current = new Audio(currentTrack.preview);
      audioRef.current.volume = volume; // Imposta il volume iniziale
      if (isPlaying) {
        audioRef.current.play(); // Avvia la riproduzione
      }
    }

    // Pulizia alla fine del ciclo di vita del componente (ad esempio se il componente viene smontato)
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [currentTrack, isPlaying, volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume; // Modifica il volume ogni volta che cambia lo stato del volume
    }
  }, [volume]); // Questa useEffect si attiva quando cambia il volume

  const handleRepeat = () => {
    dispatch(toggleRepeat());
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    dispatch(setVolume(newVolume)); // Aggiorna lo stato del volume nel Redux
  };

  return (
    <div className="player-container">
      <Container>
        <Row className="justify-content-center text-center">
          <Col>
            <h2>{currentTrack?.title || "No track playing"}</h2>
            <h6>{currentTrack?.artist.name || "No artist playing"}</h6>
            <Button 
              variant={isPlaying ? "danger" : "success"} 
              onClick={() => dispatch(togglePlay())}
            >
              {isPlaying ? "Pause" : "Play"}
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col>
            <Form.Range 
              min={0} 
              max={1} 
              step={0.01} 
              value={volume} 
              onChange={handleVolumeChange} 
            />
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col>
            <Button variant={repeat ? "warning" : "outline-secondary"} onClick={handleRepeat}>
              {repeat ? "Repeat On" : "Repeat Off"}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Player;

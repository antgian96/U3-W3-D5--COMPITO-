import React, { useState } from "react";
import TrackCard from "./trackcard";  

const MusicPlayer = () => {
  const [query, setQuery] = useState(""); 
  const [tracks, setTracks] = useState([]); 

  const fetchTracks = async (searchQuery) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`
      );
      const data = await response.json();
      setTracks(data.data); 
    } catch (error) {
      console.error("Errore nella ricerca delle tracce:", error);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (query) {
      fetchTracks(query);
    }
  };

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const handleReset = () => {
    setQuery("");
    setTracks([]);
  };

  return (
    <div className="container-fluid">
      <form onSubmit={handleSearchSubmit} className="my-4">
        <div className="input-group">
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            className="form-control"
            placeholder="Cerca una canzone"
          />
          <button type="submit" className="btn btn-success">
            Cerca
          </button>
          <button type="button" className="btn btn-danger" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      <div>
        {tracks.length > 0 ? (
          <div>
            {tracks.slice(0, 5).map((track) => (
              <TrackCard key={track.id} track={track} />  
            ))}
          </div>
        ) : (
          <p>{query ? "Nessun risultato trovato" : "Fai una ricerca!"}</p>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;

import React from "react"; 
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favoriteSlice";
import { setCurrentTrack, togglePlay } from "../redux/playerSlice";

const TrackCard = ({ track }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites || []); // Prevenire undefined
  const { currentTrack, isPlaying } = useSelector((state) => state.player);

  const isFavorite = favorites.some((favTrack) => favTrack.id === track.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(track));
      console.log(`Removed from favorites: ${track.title}`); // Dal momento che non sono riuscito a creare una pagina "I miei preferiti" in tempo, faccio questo console.log
    } else {
      dispatch(addFavorite(track));
      console.log(`Added to favorites: ${track.title}`); /// Dal momento che non sono riuscito a creare una pagina "I miei preferiti" in tempo, faccio questo console.log
    }

    // Log dello stato attuale dei preferiti
    console.log("Current favorites: ", favorites);
  };

  const handlePlay = () => {
    
    dispatch(setCurrentTrack(track));
    dispatch(togglePlay()); // Toggle play/pause
  };

  return (
    <div className="col">
      <div className="card">
        <img
          src={track.album.cover_medium}
          className="card-img-top"
          alt={track.title}
        />
        <div className="card-body text-center d-flex flex-column justify-content-between">
          <h5 className="card-title">{track.title}</h5>
          <p className="card-text">{track.artist.name}</p>
          
          {/* Bottone per aggiungere ai preferiti */}
          <button 
            onClick={toggleFavorite} 
            className="btn btn-outline-primary btn-sm"
          >
            {isFavorite ? "Rimuovi dai Preferiti" : "Aggiungi ai Preferiti"}
          </button>
          
          {/* Bottone per riprodurre la traccia */}
          <button
            onClick={handlePlay}
            className={`btn btn-${isPlaying ? "danger" : "spotify"} btn-sm`}
          >
            {isPlaying ? "Stop" : "Play"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;

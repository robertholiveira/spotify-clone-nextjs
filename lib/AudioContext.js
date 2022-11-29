import React, { useContext, useState, useEffect } from "react";

export const AudioContext = React.createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  const url = currentTrack ? currentTrack.preview_url : "";

  useEffect(() => {
    setAudio(new Audio(url));
  }, []);

  useEffect(() => {
    changeTrack();
  }, [currentTrack]);

  const changeTrack = () => {
    pause();
    audio?.setAttribute("src", url);
    play();
  };

  const play = () => {
    audio?.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audio?.pause();
    setIsPlaying(false);
  };

  return (
    <AudioContext.Provider
      value={{
        currentTrack,
        setCurrentTrack,
        isPlaying,
        setIsPlaying,
        play,
        pause,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

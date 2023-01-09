/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react";

export const AudioContext = React.createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.1);
  const [currentTime, setCurrentTime] = useState(0);
  const [audio, setAudio] = useState(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audioElement = new Audio("");
    audioElement.volume = volume;
    setAudio(audioElement);
  }, []);

  useEffect(() => {
    const url = currentTrack ? currentTrack.preview_url : "";
    handlePause();
    audio?.setAttribute("src", url);
    setCurrentTime(0);
    handleDuration();
    handlePlay();
  }, [currentTrack]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) setCurrentTime(audio?.currentTime);

      if (currentTime === duration) {
        handlePause();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, currentTime, duration]);

  useEffect(() => {
    if (audio) audio.volume = volume;
  }, [volume]);

  const handlePlay = () => {
    audio?.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audio?.pause();
    setIsPlaying(false);
  };

  const handleDuration = () => {
    setTimeout(() => {
      setDuration(audio?.duration ? audio?.duration : 0);
    }, 500);
  };

  const changePlayerCurrentTime = () => {
    if (audio) audio.currentTime = currentTime;
  };

  const isActiveTrack = (track) => {
    if (track === null || track === undefined) return false;
    return currentTrack?.id === track.id;
  };

  const playTrack = (track) => {
    setCurrentTrack(track);
    handlePlay();
  };

  return (
    <AudioContext.Provider
      value={{
        currentTrack,
        setCurrentTrack,
        isPlaying,
        setIsPlaying,
        handlePlay,
        handlePause,
        currentTime,
        setCurrentTime,
        changePlayerCurrentTime,
        duration,
        volume,
        setVolume,
        isActiveTrack,
        playTrack,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

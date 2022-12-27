const secondsToMinAndSeconds = (time) => {
  time = Math.round(time);
  const minutes = "0" + Math.floor(time / 60);
  const seconds = "0" + (time - minutes * 60);
  return minutes.substring(-2) + ":" + seconds.substr(-2);
};

export default secondsToMinAndSeconds;

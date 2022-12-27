const addIndexToTracks = (tracks, offset = 0) => {
  return tracks.map((track, index) => {
    track.number = offset + index + 1;
    return track;
  });
};
export default addIndexToTracks;

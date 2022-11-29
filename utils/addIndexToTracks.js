const addIndexToTracks = (tracks) => {
  return tracks.map((track, index) => {
    track.number = index + 1;
    return track;
  });
};
export default addIndexToTracks;

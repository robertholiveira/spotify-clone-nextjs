const sortAlbumsByReleaseDate = (albums) => {
  return albums.sort((albumA, albumB) => {
    const releaseYearA = new Date(albumA.release_date).getFullYear();
    const releaseYearB = new Date(albumB.release_date).getFullYear();

    return releaseYearB - releaseYearA;
  });
};
export default sortAlbumsByReleaseDate;

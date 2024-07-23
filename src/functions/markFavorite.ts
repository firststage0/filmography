export const markFavorite = (id: number) => {
  const idArray = JSON.parse(localStorage.getItem("favoriteFilms"));

  if (!idArray.includes(id)) {
    idArray.push(id);
  } else {
    const index = idArray.indexOf(id);
    idArray.splice(index, 1);
  }
  localStorage.setItem("favoriteFilms", JSON.stringify(idArray));
};

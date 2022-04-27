export const toggleFavorites = (id: number) => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  if (favorites.includes(id)) {
    favorites = favorites.filter((fav) => fav !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const exiteFavoritePokemon = (id: number): boolean => {
  if (typeof window === "undefined") return false;

  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.includes(id);
};

export const getFavorites = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

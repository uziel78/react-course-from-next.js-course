import { createContext } from "react";
import { useState } from "react/cjs/react.development";

//context data
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  //added for better autocompletion. no function here
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

//create React Component that can be wrapped around other components
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  //adds favorite based on latests "state snapshot" (solves order issue)
  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  // returns array that has filtered out item with id not matching parameter
  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  //check if some item in array matches condition, if so returns true
  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    //the below keys stores pointers to functions above, which can be used later/outside function
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;

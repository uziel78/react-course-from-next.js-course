import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import Card from "../ui/Card";
import itemStyles from "./MeetupItem.module.css";

function MeetupItem(props) {
  //use favorites-context.jsx components
  const favoriteCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <Card>
      <li className={itemStyles.item}>
        <div className={itemStyles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={itemStyles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={itemStyles.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;

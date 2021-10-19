import itemStyles from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <li className={itemStyles.item}>
      <div className={itemStyles.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={itemStyles.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div>
        <button className={itemStyles.actions}>To Favourites</button>
      </div>
    </li>
  );
}

export default MeetupItem;

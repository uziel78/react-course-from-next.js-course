import cardStyles from "./Card.module.css";

function Card(props) {
  return <div className={cardStyles.card}>{props.children}</div>;
}

export default Card;

//custom component that can be used as a wrapper (similar to a Layout wrapper etc)

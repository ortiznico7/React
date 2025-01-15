import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img
        src="https://pbs.twimg.com/media/GS4aLL0XYAEO1TL.jpg:large"
        width="200px"
      />
      <h1>{props.Name}</h1>
      <p>{props.Description}</p>
    </div>
  );
}

export default Card;

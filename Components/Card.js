import "../public/w3.css";

export default function Card(props) {
  return (
    <div className="w3-col m6 l3">
      <div className={"w3-card " + props.backgroundColor}>
        <h4 className="w3-header w3-center">{props.cardHeading}</h4>
        <h1 className="w3-center">{props.numberData}</h1>
      </div>
    </div>
  );
}

import "./styles/Card.css";

function Card(props: {children: React.ReactNode, className?: string}) {
  return (
    <div className={`card ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Card;

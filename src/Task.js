import { FaTimes } from "react-icons/fa";

export default function Task({ tass, onDelete, onRemainder }) {
  return (
    <div
      className={tass.remainder ? "tasks border" : "tasks"}
      onDoubleClick={() => onRemainder(tass.id)}
    >
      <h4>
        {tass.text}
        <FaTimes className="fa" onClick={() => onDelete(tass.id)} />
      </h4>
      <p>{tass.day}</p>
    </div>
  );
}

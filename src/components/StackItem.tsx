import type { Technology } from "../types";

interface StackItemProps {
  technology: Technology;
  onRemove: (id: string) => void;
}

function StackItem({ technology, onRemove }: StackItemProps) {
  return (
    <div className="stack-item">
      <div className="stack-item-icon">
        <img
          src={technology.icon}
          alt={technology.name}
        />
      </div>

      <div className="stack-item-info">
        <h4>{technology.name}</h4>
        <p>{technology.category}</p>
      </div>

      <button
        className="remove-item-btn"
        onClick={() => onRemove(technology.id)}
      >
        ×
      </button>
    </div>
  );
}

export default StackItem;
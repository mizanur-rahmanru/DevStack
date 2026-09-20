import type { Technology } from "../types";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  return (
    <article
      className={`technology-card ${
        isAdded ? "technology-card-added" : ""
      }`}
    >
      <div className="card-top">
        <div className="technology-icon">
          <img
            src={technology.icon}
            alt={technology.name}
          />
        </div>

        <span className="technology-badge">
          {technology.badge}
        </span>
      </div>

      <h3>{technology.name}</h3>

      <p className="technology-description">
        {technology.description}
      </p>

      <div className="technology-meta">
        <span className="category-chip">
          {technology.category}
        </span>

        <span className="difficulty">
          {technology.difficulty}
        </span>
      </div>

      <div className="card-bottom">
        <span className="rating">
          ★ {technology.rating}
        </span>

        <button
          className={`add-stack-btn ${
            isAdded ? "added-btn" : ""
          }`}
          disabled={isAdded}
          onClick={() => onAdd(technology)}
        >
          {isAdded
            ? "✓ Added to Stack"
            : "+ Add to Stack"}
        </button>
      </div>
    </article>
  );
}

export default TechnologyCard;
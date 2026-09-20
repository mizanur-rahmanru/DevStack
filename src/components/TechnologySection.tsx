import type { Technology } from "../types";
import TechnologyCard from "./TechnologyCard";

interface TechnologySectionProps {
  technologies: Technology[];
  stack: Technology[];
  onAdd: (technology: Technology) => void;
}

function TechnologySection({
  technologies,
  stack,
  onAdd,
}: TechnologySectionProps) {
  return (
    <section className="technology-section" id="technologies">
      <div className="technology-container">

        <div className="section-heading">
          <p className="section-label">
            TECHNOLOGY LIBRARY
          </p>

          <h2>
            Explore <span>Technologies</span>
          </h2>

          <p>
            Choose the technologies you need and build your
            personalized development stack.
          </p>
        </div>

        <div className="technology-grid">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              isAdded={stack.some(
                (item) => item.id === technology.id
              )}
              onAdd={onAdd}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default TechnologySection;
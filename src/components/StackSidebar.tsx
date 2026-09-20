import type { Technology } from "../types";
import StackItem from "./StackItem";

interface StackSidebarProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function StackSidebar({
  stack,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) {
  return (
    <aside className="stack-sidebar">
      <div className="stack-header">
        <div>
          <p className="stack-label">YOUR COLLECTION</p>

          <h3>Your Stack</h3>
        </div>

        <span className="stack-count">
          {stack.length}
        </span>
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <div className="empty-icon">+</div>

          <h4>Your stack is empty</h4>

          <p>
            Add technologies from the library to build
            your stack.
          </p>
        </div>
      ) : (
        <>
          <div className="stack-list">
            {stack.map((technology) => (
              <StackItem
                key={technology.id}
                technology={technology}
                onRemove={onRemove}
              />
            ))}
          </div>

          <button
            className="remove-all-btn"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default StackSidebar;
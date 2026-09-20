import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import StackSidebar from "./components/StackSidebar";

import type { Technology } from "./types";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>(
    []
  );

  const [stack, setStack] = useState<Technology[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (technology: Technology) => {
    const alreadyExists = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);
  };

  const handleRemoveFromStack = (id: string) => {
    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <>
      <Navbar />

      <Hero />

      {loading ? (
        <div className="loading">
          Loading technologies...
        </div>
      ) : (
        <section className="stack-section">
          <div className="stack-layout">

            <div className="technology-area">
              <TechnologySection
                technologies={technologies}
                stack={stack}
                onAdd={handleAddToStack}
              />
            </div>

            <StackSidebar
              stack={stack}
              onRemove={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}
            />

          </div>
        </section>
      )}
    </>
  );
}

export default App;
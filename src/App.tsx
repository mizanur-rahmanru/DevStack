
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import StackSidebar from "./components/StackSidebar";
import type { Technology } from "./types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
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
    toast.warning(`${technology.name} is already in your stack!`);
    return;
  }

  setStack((previousStack) => [
    ...previousStack,
    technology,
  ]);

  toast.success(`${technology.name} added to your stack!`);
};

const handleRemoveFromStack = (id: string) => {
  const removedTechnology = stack.find(
    (item) => item.id === id
  );

  setStack((previousStack) =>
    previousStack.filter((item) => item.id !== id)
  );

  if (removedTechnology) {
    toast.info(`${removedTechnology.name} removed from your stack.`);
  }
};
const handleRemoveAll = () => {
  if (stack.length === 0) {
    toast.info("Your stack is already empty.");
    return;
  }

  setStack([]);
  toast.success("All technologies removed from your stack!");
};

  return (
    <>
      <ToastContainer
      position="top-right"
      autoClose={2000}
      theme="dark"
      />
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
      <Footer />
    </>
  );
}

export default App;
import "./App.css";
import { useState } from "react";
import ColorList from "./Components/ColorList";
import ColorModal from "./Components/ColorModal";
import { AnimatePresence, motion } from "framer-motion";
import { colors } from "./colorData";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors);

  console.log(selectedColor);

  const colorClick = (id) => {
    const selected = colors.find((color) => color.id === id);
    if (selected) {
      setSelectedColor(selected);
      setIsModalOpen(!isModalOpen);
    }
  };

  const closeModal = () => {
    setSelectedColor(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <main className="page-main">
        <section className="section">
          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                className="overlay"
                initial={{
                  opacity: 0,
                  zIndex: 0,
                }}
                animate={{
                  opacity: 1,
                  zIndex: 3,
                }}
                exit={{
                  opacity: 0,
                  zIndex: 0,
                }}
                transition={{ duration: 0.2 }}
              ></motion.div>
            )}
          </AnimatePresence>
          <div className="container">
            <div className="content">
              <h1 className="text-align-center">Interactive Color Codes</h1>
              <ColorList selectedColor={selectedColor} click={colorClick} />
            </div>
            <ColorModal
              isModalOpen={isModalOpen}
              selectedColor={selectedColor}
              close={closeModal}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

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
        <section className="relative h-screen w-screen bg-vanilla py-20">
          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                key="overlay"
                className="absolute inset-0 h-full w-full backdrop-blur-md"
                initial={{
                  opacity: 0,
                  zIndex: 20,
                }}
                animate={{
                  opacity: 1,
                  zIndex: 20,
                }}
                exit={{
                  opacity: 0,
                  zIndex: 20,
                  transition: {
                    duration: 0.23,
                  },
                }}
                transition={{ duration: 0.2 }}
              ></motion.div>
            )}
          </AnimatePresence>

          <div className="mx-auto h-full w-90%">
            <div className="relative z-10 flex h-full flex-col justify-center gap-12">
              <h1 className="text-center text-5xl font-semibold tracking-tight">
                Interactive Color Codes
              </h1>
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

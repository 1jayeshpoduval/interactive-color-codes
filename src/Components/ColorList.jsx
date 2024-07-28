import React from "react";
import { colors } from "../colorData";
import { motion } from "framer-motion";

const ColorList = (props) => {
  const colorAnimationVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.025,
    },
    tap: {
      scale: 0.95,
    },
    exit: {
      scale: 1,
    },
  };

  return (
    <div className="font-regular flex select-none gap-4 text-white">
      {colors.map((color) => (
        <motion.div
          className="max-w-20% h-180px relative flex-grow basis-1/5 cursor-pointer rounded-xl p-3"
          key={color.id}
          style={{ backgroundColor: color.hex }}
          onClick={() => {
            props.click(color.id);
          }}
          variants={colorAnimationVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          exit="exit"
          transition={{
            type: "spring",
            stiffness: 140,
            damping: 18,
          }}
          layoutId={color.id}
        >
          <motion.div
            className="text-md absolute bottom-4"
            layout="position"
            layoutId={color.name}
          >
            {color.name}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ColorList;

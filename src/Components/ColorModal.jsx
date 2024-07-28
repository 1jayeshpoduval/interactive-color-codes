import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const ColorModal = (props) => {
  return (
    <div>
      <AnimatePresence>
        {props.isModalOpen && (
          <motion.div
            className="color-modal"
            style={{ backgroundColor: props.selectedColor.hex }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 18,
            }}
            layoutId={props.selectedColor.id}
            onClick={props.close}
          >
            <div className="color-description">
              <motion.div layout="position" layoutId={props.selectedColor.name}>
                {props.selectedColor.name}
              </motion.div>
              <div className="divider"></div>
              <div>
                <div className="text-1 u-font-weight-400 u-opacity-70">
                  RGB: {props.selectedColor.rgb}
                </div>
                <div className="text-1 u-font-weight-400 u-opacity-70">
                  HSL: {props.selectedColor.hsl}
                </div>
                <div className="text-1 u-font-weight-400 u-opacity-70">
                  HEX: {props.selectedColor.hex}
                </div>
              </div>
            </div>
          </motion.div>
        )}
        ;
      </AnimatePresence>
    </div>
  );
};

export default ColorModal;

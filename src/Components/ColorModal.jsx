import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const ColorModal = (props) => {
  return (
    <div>
      <AnimatePresence>
        {props.isModalOpen && (
          <motion.div
            className="w-450px h-450px -ml-225px -mt-225px fixed left-1/2 top-1/2 z-30 cursor-pointer select-none rounded-xl text-lg text-white"
            style={{ backgroundColor: props.selectedColor.hex }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 18,
            }}
            layoutId={props.selectedColor.id}
            onClick={props.close}
          >
            <div className="flex h-full flex-col justify-end gap-4 p-4">
              <motion.div layout="position" layoutId={props.selectedColor.name}>
                {props.selectedColor.name}
              </motion.div>
              <div className="h-2px w-full bg-white opacity-10"></div>
              <div>
                <div className="text-md font-regular leading-relaxed opacity-65">
                  RGB: {props.selectedColor.rgb}
                </div>
                <div className="text-md font-regular leading-relaxed opacity-65">
                  HSL: {props.selectedColor.hsl}
                </div>
                <div className="text-md font-regular leading-relaxed opacity-65">
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

import React from 'react'
import {colors} from './colorData'
import {AnimatePresence, motion} from 'framer-motion'

const ColorList = (props) => {

    const colorAnimationVariants = {
     initial: {
        scale: 1
     },
     hover: {
        scale: 1.025
     },
     tap: {
        scale: 0.95
     },  
     exit: {
        scale: 1
     } 
    }

  return (

    <div className='row'>
            {colors.map((color) => (
                <motion.div className='col col-lg-2'
                key = {color.id}
                style={{backgroundColor: color.hex}}
                onClick={() => {props.click(color)}}
                variants={colorAnimationVariants}
                initial='initial'
                whileHover='hover'
                whileTap='tap'
                exit='exit'
                transition={{
                    type: 'spring',
                    stiffness: 140,
                    damping: 18
                }}
                layoutId={color.id}>
                    <div className='text-1 u-position-absolute u-bottom-10'
                        layoutId='1'>{color.name}</div>
                </motion.div>
        ))}
    </div>
  )
}

export default ColorList
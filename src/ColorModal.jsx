import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {colors} from './colorData'

const ColorModal = (props) => {


  return (
    <div>
        <AnimatePresence>
        {props.selected && (
            <motion.div className='color-modal' 
            style={{backgroundColor: props.selectedHex}}
            transition={{
                type: 'spring',
                stiffness: 140,
                damping: 18
            }}

            layoutId = {props.selectedId}
            onClick={props.close}>
                <div className='color-description'>
                    <div layoutId='1'>{props.selectedName}</div>
                    <div className='divider'></div>
                    <div>
                    <div className='text-1 u-font-weight-400 u-opacity-70'>RGB: {props.selectedRGB}</div>
                    <div className='text-1 u-font-weight-400 u-opacity-70'>HSL: {props.selectedHSL}</div>
                    <div className='text-1 u-font-weight-400 u-opacity-70'>HEX: {props.selectedHex}</div>
                    </div>
                    
                </div>
            </motion.div>
        )}
        </AnimatePresence>
    </div>
    
  )
}


export default ColorModal
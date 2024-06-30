import './App.css';
import { useState } from 'react';
import ColorList from './ColorList';
import ColorModal from './ColorModal';
import {AnimatePresence, motion} from 'framer-motion'

function App() {

  const[selected, setSelected] = useState(false)
  const [selectedHex, setSelectedHex] = useState(null)
  const [selectedId, setSelectedId] = useState(null)
  const [selectedRGB, setSelectedRGB] = useState(null)
  const [selectedHSL, setSelectedHSL] = useState(null)
  const [selectedName, setSelectedName] = useState(null)

  const colorClick = (color) => {
    setSelected(!selected)
    setSelectedHex(color.hex)
    setSelectedId(color.id)
    setSelectedHSL(color.hsl)
    setSelectedRGB(color.rgb)
    setSelectedName(color.name)

  }

  const closeModal = () => {
    setSelected(!selected)
  }

  return (
    <div>
      <main className='page-main'>
        <section className='section'>
          <AnimatePresence>
            {selected && (
              <motion.div className='overlay'
                initial={{
                  opacity: 0,
                  zIndex: 0,
                }}
                animate={{
                  opacity: 1,
                  zIndex: 3
                }} 
                exit= {{
                  opacity: 0,
                  zIndex: 0
                }}
                transition={{duration: 0.2}}
              ></motion.div>
            )}
          </AnimatePresence>
          <div className='container'>
            <div className = 'content'>
              <h1 className='text-align-center'>Interactive Color Codes</h1>
              <ColorList setSelected = {setSelected}
                click = {colorClick}/>
            </div>
            <ColorModal selected={selected}
                selectedName = {selectedName} 
                selectedRGB = {selectedRGB}
                selectedHSL = {selectedHSL} 
                selectedId = {selectedId} 
                selectedHex = {selectedHex}
                close={closeModal}/>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

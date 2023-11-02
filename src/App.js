/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Translation from './Translation'
import Language from './Language'
import switchImg from './switchImg.png'
import image from './image.png'

function App () {
  const [translation, setTranslation] = useState(
    {
      translate: '',
      translated: '',
      from: 'es',
      to: 'en'
    })

  return (
    <div>
      <Navbar />
      <div className='main'>
        <div>
          <Language
            setTranslation={setTranslation}
            name='from'
          />
          <textarea
            onChange={(event) => {
              const { value } = event.target
              setTranslation(prevTraslate => {
                return {
                  ...prevTraslate,
                  translate: value
                }
              })
            }}
            name='comments'
            rows='8' cols='60'
          />
        </div>

        <img className='switchImg' src={switchImg} alt='switch with arrows logo' />
        <div>
          <Language
            setTranslation={setTranslation}
            name='to'
          />
          <div className='output'>
            {translation.translated}
          </div>
        </div>
      </div>
      <Translation
        setTranslation={setTranslation}
        translation={translation}
        name='translated'
      />
    </div>
  )
}

export default App

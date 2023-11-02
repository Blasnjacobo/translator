/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Translation from './Translation'
import Language from './Language'
import switchImg from './switchImg.png'

function App () {
  const [translation, setTranslation] = useState(
    {
      translate: 'Siempre es buen momento para cantar, todo el mundo con las manos arriba y digan allelluja',
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
            rows='6' cols='54'
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
      <p className='colorWhite'>{translation.translate}</p>
      <p className='colorWhite'>{translation.translated}</p>
      <p className='colorWhite'>{translation.from}</p>
      <p className='colorWhite'>{translation.to}</p>

    </div>
  )
}

export default App

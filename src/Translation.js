import { useEffect } from 'react'

const Translation = ({ setTranslation, translation, name }) => {
  useEffect(() => {
    async function getApi () {
      const url = 'https://text-translator2.p.rapidapi.com/translate'
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'a34b061005mshb01ef4707dd4727p1dbcd2jsnc952d5da4ded',
          'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        body: new URLSearchParams({
          source_language: `${translation.from}`,
          target_language: `${translation.to}`,
          text: `${translation.translate}`
        })
      }
      try {
        const response = await fetch(url, options)
        const result = await response.text()
        setTranslation(prevTranslate => {
          return {
            ...prevTranslate,
            [name]: result.slice(68, -9)
          }
        })
      } catch (error) {
        console.error(error)
      }
    }
    getApi()
  }, [name, setTranslation, translation.from, translation.to, translation.translate])

  return (
    <div />
  )
}

export default Translation

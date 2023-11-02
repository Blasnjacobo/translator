/* eslint-disable react/style-prop-object */
import React from 'react'

const Language = ({ setTranslation, name }) => {
  function handleChange (event) {
    const { name, value } = event.target // This method is called destructuring
    setTranslation(prevTranslate => {
      return {
        ...prevTranslate,
        [name]: value
      }
    })
  }
  return (
    <div className='InquiryComment'>

      <select
        id='Language'
        onChange={handleChange}
        className='headList'
        name={name}
      >

        <option className='subList' value=''>Detect Language</option>
        <option className='subList' value='zh'>Chinese</option>
        <option className='subList' value='nl'>Dutch</option>
        <option className='subList' value='en'>English</option>
        <option className='subList' value='fr'>French</option>
        <option className='subList' value='de'>German</option>
        <option className='subList' value='hi'>Hindi</option>
        <option className='subList' value='ga'>Irish</option>
        <option className='subList' value='it'>Italian</option>
        <option className='subList' value='ja'>Japanese</option>
        <option className='subList' value='ko'>Korean</option>
        <option className='subList' value='la'>Latin</option>
        <option className='subList' value='pt'>Portuguese</option>
        <option className='subList' value='pa'>Punjabi</option>
        <option className='subList' value='ru'>Russian</option>
        <option className='subList' value='es'>Spanish</option>
        <option className='subList' value='tr'>Turkish</option>
      </select>
      <p>{Language}</p>
    </div>
  )
}

export default Language

import React, { useState } from 'react'
import Typewriter from '../../../components/typewriter/TypeWriter'
import './Paraphraser.scss'

const Paraphraser = () => {

  const [input_text, setInputText] = useState()
  const [response_text, setResponse] = useState()

  const handleOnChangeText = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let body = JSON.stringify({
      text: input_text,
      engine: "ada:ft-personal:paraphraser-v0-2022-05-31-09-52-39",
      inference_parameters: {
        temperature: 0.7,
        max_tokens: 200,
        top_p: 1,
        frequency_penalty: 0.4,
        presence_penalty: 0.2,
        stop: [
          "\n\n***\n\n",
          "\n\n###\n\n",
          "##END##"
        ]
      },
    })


    try {
      const res = await fetch('http://localhost:8000/automation/v1/rephraser/paraphrase', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body
      })
      const {data} = await res.json()
      setResponse(data)

    } catch (err) {
      console.log("err", err)
    }

  }

  return (
        <section id= "paraphraser">
          <h5>Paraphraser</h5>
          <h2>Start Rewriting Text</h2>

          <div className="container utility_container">
            <div>
                <h3>Input Text</h3>
                <form>
                    <textarea type="text" onChange={ (e) => handleOnChangeText(e)} value={input_text || "" } placeholder="Text" autoFocus />
                    <button className='btn' onClick={ (e) => handleSubmit(e)}> Submit</button>
                </form>
            </div>

            <div>
                <h3>Output</h3><Typewriter paragraph={response_text} />
                
            </div>
        </div>  
      </section>
  )
}

export default Paraphraser
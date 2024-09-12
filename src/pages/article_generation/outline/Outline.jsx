import React, { useState } from 'react'
import Typewriter from '../../../components/typewriter/TypeWriter'
import './Outline.scss'

const Outline = () => {
  const [input_intro, setInputIntro] = useState()
  const [response_text, setResponse] = useState()

  const handleOnChangeIntro = (e) => {
    setInputIntro(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let body = JSON.stringify({
      intro: input_intro,
      engine: "ada:ft-personal:outline-from-title-intro-v0-2022-05-31-04-59-28",
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
      const res = await fetch('http://localhost:8000/automation/v1/article/outlines', {
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
          <h5>Article Generation</h5>
          <h2>Generate Outline Topics</h2>

          <div className="container utility_container">
            <div>
                <h3>Input Title and Introduction</h3>
                <form>
                    <textarea type="text" onChange={ (e) => handleOnChangeIntro(e)} value={input_intro || "" } placeholder="Title and Introduction" autoFocus />
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

export default Outline
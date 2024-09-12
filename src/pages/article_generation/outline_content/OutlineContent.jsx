import React, { useState } from 'react'
import Typewriter from '../../../components/typewriter/TypeWriter'
import './OutlineContent.scss'

const OutlineContent = () => {
  const [input_intro_outlines, setInputIntroOutlines] = useState()
  const [response_text, setResponse] = useState()

  const handleOnChangeIntroOutlines = (e) => {
    setInputIntroOutlines(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let body = JSON.stringify({
      intro_outlines: input_intro_outlines,
      engine: "ada:ft-personal:outline-gen-from-article-v0-2022-05-31-05-05-41",
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
      const res = await fetch('http://localhost:8000/automation/v1/article/outlines_generated', {
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
          <h5>Article Genertion</h5>
          <h2>Generate Outline Content from Outlines</h2>

          <div className="container utility_container">
            <div>
                <h3>Input Text</h3>
                <form>
                    <textarea type="text" onChange={ (e) => handleOnChangeIntroOutlines(e)} value={input_intro_outlines || "" } placeholder="Introduction with Outlines" autoFocus />
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

export default OutlineContent
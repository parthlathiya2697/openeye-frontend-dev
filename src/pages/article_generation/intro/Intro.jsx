import React, { useState } from 'react'
import Typewriter from '../../../components/typewriter/TypeWriter'
import './Intro.scss'

const Intro = () => {
  const [input_title, setInputTitle] = useState()
  const [response_text, setResponse] = useState()

  const handleOnChangeTitle = (e) => {
    setInputTitle(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let body = JSON.stringify({
      title: input_title,
      engine: "ada:ft-personal:intro-from-title-v0-2022-05-31-04-46-56",
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
      const res = await fetch('http://localhost:9000/automation/v1/article/intro', {
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
          <h2>Start Generating Introduction</h2>

          <div className="container utility_container">
            <div>
                <h3>Input Title</h3>
                <form>
                    <input type="text" onChange={ (e) => handleOnChangeTitle(e)} value={input_title || "" } placeholder= "Title to generate intro from" autoFocus />
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

export default Intro
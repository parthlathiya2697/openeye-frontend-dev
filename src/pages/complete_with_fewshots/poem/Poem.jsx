import React, { useState } from 'react'
import './Poem.scss'

import { ApiPost } from "../../../services/helpers/API/ApiData"
import InputComponent from '../../../components/InputComponent/InputComponent'
import ResponseCard from '../../../components/response_card/ResponseCard'
let URL = 'automation/v1/completions_fewshots/poem'

const Poem = () => {
  const [input_words, setInputWords] = useState()
  const [input_title, setInputTitle] = useState()
  const [response_text, setResponse] = useState()

  const handleOnChangeWords = (e) => {
    setInputWords(e.target.value)
  }

  const handleOnChangeTitle = (e) => {
    setInputTitle(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let body = JSON.stringify({
      words: input_words,
      title: input_title,
      engine: "text-ada-001",
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


    await ApiPost(URL, body).then((res) => {
      let response_data = res?.data?.data;
      setResponse(response_data);
    
    }).catch((err) => {
      console.log("Error in response: ", err);
    })

  }

  return (
        <section id= "paraphraser">
          <h5>Poem </h5>
          <h2>Create Astonishing Poems</h2>

          <div className='write_template'>
            <InputComponent title1= "Enter Title" placeholder1= "The thirsty crow"
                      onChange1= {handleOnChangeTitle} title2= "Enter Some Words" placeholder2= "The thirsty crow went to an ocean to bring some water"
                      onChange2= {handleOnChangeWords} buttontext1= "Write" onClick1= {handleSubmit}/>

            <ResponseCard text={response_text} />
          </div>
      </section>
  )
}

export default Poem
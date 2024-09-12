import React, { useState } from 'react'
import './CreativeStory.scss'

import { ApiPost } from "../../../services/helpers/API/ApiData"
import InputComponent from '../../../components/InputComponent/InputComponent'
import ResponseCard from '../../../components/response_card/ResponseCard'
let URL = 'automation/v1/completions_fewshots/creative_story'

const CreativeStory = () => {
  const [input_paraphrase_story, setInputStory] = useState()
  const [input_paraphrase_title, setInputTitle] = useState()
  const [response_text, setResponse] = useState()

  const handleOnChangeStory = (e) => {
    setInputStory(e.target.value)
  }

  const handleOnChangeTitle = (e) => {
    setInputTitle(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let body = JSON.stringify({
      story: input_paraphrase_story,
      title: input_paraphrase_title,
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


    await ApiPost(URL, body).then((res) => {
      let response_data = res?.data?.data;
      setResponse(response_data);
    
    }).catch((err) => {
      console.log("Error in response: ", err);
    })

  }

  return (
        <section id= "paraphraser">
          <h5>Story Writer</h5>
          <h2>Generate Creative Stories</h2>

          <div className='write_template'>
            <InputComponent title1= "Enter Title" placeholder1= "Summer vacation clothing sale..."
                      onChange1= {handleOnChangeTitle} title2= "Enter Some words" placeholder2= "Summer vacation clothing sale..."
                      onChange2= {handleOnChangeStory} buttontext2= "Write" onClick1= {handleSubmit}/>

            <ResponseCard text={response_text} />
          </div>
      </section>
  )
}

export default CreativeStory
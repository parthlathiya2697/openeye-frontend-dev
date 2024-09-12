import React, { useState } from 'react'
import './Rephraser.scss'

import { ApiPost } from "../../../services/helpers/API/ApiData"
import InputComponent from '../../../components/InputComponent/InputComponent'
import ResponseCard from '../../../components/response_card/ResponseCard'
let URL = 'automation/v1/completions_finetunes/rephrase'

const Rephraser = () => {
  const [input_content, setInputContent] = useState()
  const [response_text, setResponse] = useState()

  const handleOnChangeContent = (e) => {
    setInputContent(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let body = JSON.stringify({
      content: input_content,
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
          <h5>Paraphraser</h5>
          <h2>Start Rewriting Text</h2>

          <div className='write_template'>
            <InputComponent title1= "Enter Text" placeholder1= "Summer vacation clothing sale is comming soon. Hurry up today and get a chance to win a lot more."
                      onChange1= {handleOnChangeContent} buttontext1= "Write" onClick1= {handleSubmit}/>

            <ResponseCard text={response_text} />
          </div>
      </section>
  )
}

export default Rephraser
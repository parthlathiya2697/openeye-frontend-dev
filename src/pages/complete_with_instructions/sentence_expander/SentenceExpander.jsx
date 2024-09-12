import React, { useState } from 'react'
import './SentenceExpander.scss'

import { ApiPost } from "../../../services/helpers/API/ApiData"
import InputComponent from '../../../components/InputComponent/InputComponent'
import ResponseCard from '../../../components/response_card/ResponseCard'
let URL = 'automation/v1/completions_instructions/sentence_expander'

const SentenceExpander = () => {
  const [input_sentence, setInputSentence] = useState()
  const [response_text, setResponse] = useState()

  const handleOnChangeSentence = (e) => {
    setInputSentence(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let body = JSON.stringify({
      sentence: input_sentence,
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
          <h5>Text Expander</h5>
          <h2>Start Expanding Text</h2>

          <div className='write_template'>
            <InputComponent title1= "Enter Sentence" placeholder1= "Today is very cool atmosphere with rain and thunder."
                      onChange1= {handleOnChangeSentence} buttontext1= "Write" onClick1= {handleSubmit}/>

            <ResponseCard text={response_text} />
          </div>
      </section>
  )
}

export default SentenceExpander
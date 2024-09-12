import React, {  useState } from 'react'
import './BlogpostOutline.scss'

import { ApiPost } from "../../../services/helpers/API/ApiData"
import InputComponent from '../../../components/InputComponent/InputComponent'
import ResponseCard from '../../../components/response_card/ResponseCard'

let URL = 'automation/v1/completions_instructions/blogpost_outline'

const BlogpostOutline = () => {
  const [input_topic, setInputTopic] = useState()
  const [response_text, setResponse] = useState()

  const handleOnChangeTopic = (e) => {
    setInputTopic(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let body = JSON.stringify({
      topic: input_topic,
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
      let text = res?.data?.data;
      setResponse(text);
    
    }).catch((err) => {
      console.log("Error in response: ", err);
    })
  }

  return (
        <section id= "paraphraser">
          <h5>Article Generation</h5>
          <h2>Create Outlines for your Blog posts</h2>

          <div className='write_template'>
          <InputComponent title1= "Enter Topic" placeholder1= "Stress free your mind with these amazing tips and tricks"
                    onChange1= {handleOnChangeTopic} buttontext1= "Write" onClick1= {handleSubmit}/>

          <ResponseCard text={response_text} />
        </div>

      </section>
  )
}

export default BlogpostOutline
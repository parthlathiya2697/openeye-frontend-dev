import React, { useState } from 'react';
import './BlogspostHashtag.scss';



import { ApiPost } from "../../../services/helpers/API/ApiData"
import ResponseCard from '../../../components/response_card/ResponseCard';
import InputComponent from '../../../components/InputComponent/InputComponent';

let URL = 'automation/v1/completions_instructions/blogpost_hashtags';


const BlogspostHashtag = () => {
  const [input_description, setInputDescription] = useState('');
  const [response_text, setResponse] = useState('');



  const handleOnChangeDescription = (e) => {
    setInputDescription(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let body = JSON.stringify({
      description: input_description,
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
    <div className='BlogpostHashtag'>
      <section id="hashtags">
        <h5>Hashtag </h5>
        <h2>Generate Hashtags for Blogs</h2>
        
        <div className='write_template'>
          <InputComponent title1= "Enter Description" placeholder1= "Summer vacation clothing sale..."
                    onChange1= {handleOnChangeDescription} buttontext1= "Write" onClick1= {handleSubmit}/>

          <ResponseCard text={response_text} />
        </div>
        
      </section>
    </div>
  )
}

export default BlogspostHashtag
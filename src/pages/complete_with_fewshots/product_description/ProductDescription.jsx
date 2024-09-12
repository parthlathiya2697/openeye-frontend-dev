import React, { useState } from 'react'
import './ProductDescription.scss'

import { ApiPost } from "../../../services/helpers/API/ApiData"
import InputComponent from '../../../components/InputComponent/InputComponent'
import ResponseCard from '../../../components/response_card/ResponseCard'
let URL = 'automation/v1/completions_fewshots/product_description'

const ProductDescription = () => {
  const [input_product_name, setInputProductName] = useState()
  const [input_product_characteristics, setInputProductNameArea] = useState()
  const [response_text, setResponse] = useState()

  const handleOnChangeProductName = (e) => {
    setInputProductName(e.target.value)
  }

  const handleOnChangeProductCharacteristics = (e) => {
    setInputProductNameArea(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let body = JSON.stringify({
      product_name: input_product_name,
      product_characteristics: input_product_characteristics,
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
    <section id="product_description">
      <h5>Product Description</h5>
      <h2>Generate Description for products</h2>

      <div className='write_template'>
        <InputComponent title1= "Enter Product Name" placeholder1= "Vision on AI"
                  onChange1= {handleOnChangeProductName} title2= "Enter Product Characteristics" placeholder2= "State of the Art NLP Language tool to make commericial content writing use-cases."
                  onChange2= {handleOnChangeProductCharacteristics} buttontext1= "Write" onClick1= {handleSubmit}/>

        <ResponseCard text={response_text} />
      </div>
    </section>
  )
}

export default ProductDescription
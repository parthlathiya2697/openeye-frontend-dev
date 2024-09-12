import React, {useState} from 'react';
import './RequestCard.scss';

const RequestCard = ({response_text, setResponse}) => {

	const [input_title, setInputTitle] = useState()
	IntroURL = "automation/v1/article/intro"

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

		await ApiPost(IntroURL, loginData).then((res) => {
			const { data } = await res.json()
			setResponse(data)
		  }).catch((err) => {
			console.log("Error in response: ", err)
		  })
	
	  }

	return (
		<div className="RequestCard">
			<h3>Input Title</h3>
			<form>
				<input type="text" onChange={ (e) => handleOnChangeTitle(e)} value={input_title || "" } placeholder= "Title to generate intro from" autoFocus />
				<button className='btn' onClick={ (e) => handleSubmit(e)}> Submit</button>
			</form>
		</div>
	);
}

export default RequestCard;
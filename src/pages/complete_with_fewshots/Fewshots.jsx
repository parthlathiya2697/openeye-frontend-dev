import React from 'react'
import './Fewshots.scss'
import { Outlet, Link } from "react-router-dom";

const Fewshots = () => {

	function importAll(r) {
		let images = {};
		 r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
		return images
	   }

	const images_dict = importAll(require.context('../../assets/applications/complete_with_fewshots', false, /\.(png|jpe?g|svg)$/));
	const application_filenmaes = Object.keys(images_dict);

	const application_page_routes = []
	application_filenmaes.map((item,index)=>{application_page_routes.push(item.replace('.png', '') )});
	
	return (
		
		<>
		<section className="applications">
			<h2>Explore Your Creativity With Intelligent Machines</h2>
			<h5>State of the AI Assistants</h5>
			
			<div className="application__content">
				<div className="application__cards">

				{
					application_page_routes.map((item,index)=>{
					return (
						
							<Link key={index} to= {"/fewshots_" +item + "/"} className='application__card card'>
							<div className="" data-effect="zoom">
									
									<div className="card__header">
									<figure className="card__profile">
										<img src= {images_dict[Object.keys(images_dict)[index]]} alt="Short description"/>
									</figure>
									</div>
									
									<div className="card__body">
									<h3 className="card__name">{item}</h3>
									</div>
								</div>
							</Link>
						)
					})
			}

				</div>
			</div>
			</section>

		<Outlet />
		</>
	)
}

export default Fewshots
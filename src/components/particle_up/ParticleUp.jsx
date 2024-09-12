import React from 'react';
import './ParticleUp.scss'

const ParticleUp = () => {
	return (
		<>
			<div className='ParticleUp'>
				{ /*PARTICLE SYSTEM*/}
				<div className="particleup_page_bg"></div>

				<div className="">
					<div className="particleup_particle particleup_particle-1"></div>
					<div className="particleup_particle particleup_particle-2"></div>
					<div className="particleup_particle particleup_particle-3"></div>
					<div className="particleup_particle particleup_particle-4"></div>
				</div>
			</div>
		</>
	);
}

export default ParticleUp;

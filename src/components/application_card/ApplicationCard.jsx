import React from 'react'
import "./ApplicationCard.scss"

const ApplicationCard = (props) => {

    const { background_image, character_image, name, job, bio } = props

    return (
        <div className="applications_card" data-effect="applications_zoom">

            <figure className="applications_card_image">
                <img src={background_image} alt="Short description" />
            </figure>

            <div className="applications_card_header">
                <figure className="applications_card_profile">
                    <img src={character_image} alt="Short description" />
                </figure>
            </div>

            <div className="applications_card_body">
                <h3 className="applications_card_name">{name}</h3>
                <p className="applications_card_job">{job}</p>
                <p className="applications_card_bio"> {bio}</p>
            </div>

            <div className="applications_card_footer">
                <button className="applications_card_button">
                    Explore
                </button>
            </div>
        </div>
    )
}

export default ApplicationCard
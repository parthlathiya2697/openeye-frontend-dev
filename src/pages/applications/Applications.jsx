import React from "react"
import './Applications.scss'
import levelInstruction from "../../assets/level_select/child.png"
import levelFewshots from "../../assets/level_select/teenage.png"
import levelFinetune from "../../assets/level_select/adult.png"
import application_card_background from "../../assets/application_card_background.png"
import { useNavigate } from 'react-router-dom';


import { Outlet } from "react-router-dom";
import ApplicationCard from "../../components/application_card/ApplicationCard"

const Applications = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="Applications">
        <h2>Explore Your Creativity With Intelligent Machines</h2>
        <h5>State of the AI Assistants</h5>

        <div className="applications_content">
          <div className="applications_cards"  >
             <div className="applications_card" onClick={() => navigate("/instructions")}>
              <ApplicationCard background_image= {application_card_background} character_image= {levelInstruction} name= "Little Sam" job= "Tries to create with Instruction" bio= "Goes to School" />
            </div>

            <div className="applications_card" onClick={() => navigate("/fewshots")}>
              <ApplicationCard background_image= {application_card_background} character_image= {levelFewshots} name= "Adult Andrew" job= "Can reference some examples to create" bio= "Under College Graduation" />
            </div>

            <div className="applications_card" onClick={() => navigate("/finetunes")}>
              <ApplicationCard background_image= {application_card_background} character_image= {levelFinetune} name= "Wise John" job= "Is Professionally Trained" bio= "Has Worked accross multiple businesses" />
            </div>
          </div>
        </div>
      </section>

      <Outlet />
    </>
  );
}

export default Applications
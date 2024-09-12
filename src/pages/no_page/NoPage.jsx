import React from 'react'
import './NoPage.scss'

import AnimatingEmoji from '../../components/animating_emoji/AnimatingEmoji';

const NoPage = () => {
	return (
      <>
        <section>
            <h2>404 Not found</h2>
            <AnimatingEmoji/>
        </section>
      </>
    );
  };
  
  export default NoPage;
import React from 'react'

import PropTypes from 'prop-types'

import './about.css'

const About = (props) => {
  return (
    <div className={`about-about ${props.rootClassName} `}>
      <img
        alt={props.DecentraLogo1_alt}
        src={props.DecentraLogo1_src}
        className="about-decentra-logo1"
      />
      <span className="about-text DesktopStatementText">
        <span className="">
          <span className="">Create, explore and trade</span>
          <br className=""></br>
          <span className="">
            in the first-ever virtual world owned by its users
          </span>
        </span>
      </span>
      <span className="about-text5">
        <span className="">THIS IS DECENTRALAND</span>
      </span>
    </div>
  )
}

About.defaultProps = {
  DecentraLogo1_src: '/playground_assets/decentralogo14750-tc8m-800h.png',
  DecentraLogo1_alt: 'DecentraLogo14750',
  rootClassName: '',
}

About.propTypes = {
  DecentraLogo1_src: PropTypes.string,
  DecentraLogo1_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default About

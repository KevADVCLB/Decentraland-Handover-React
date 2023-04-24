import React from 'react'

import PropTypes from 'prop-types'

import './about.css'

const About = (props) => {
    return (
        <section className={`about`}>
            <img
                alt={props.DecentraLogo1_alt}
                src={props.DecentraLogo1_src}
                className="img-about"
            />
            <div>
                <h3>THIS IS DECENTRALAND</h3>
                <h1>Create, explore and trade in the first-ever virtual world owned by its users</h1>
            </div>
        </section>
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

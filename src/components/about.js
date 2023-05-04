import React, {useRef} from 'react'
import {useInView} from "framer-motion"

import PropTypes from 'prop-types'
import {
    motion,
} from "framer-motion";

import './about.css'
import AnimatedCharacters from "./AnimatedCharacters";

const text = 'Create, explore and trade in the first-ever virtual world owned by its users'
const About = (props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {amount: 0.5, once: true});
    const letterAnimation = {
        visible: {
            transition: {
                staggerChildren: 0.015
            }
        }
    };
    return (
        <section className={`about`}>
            <img
                alt={props.DecentraLogo1_alt}
                src={props.DecentraLogo1_src}
                className="img-about"
            />
            <motion.div ref={ref}
                        initial="hidden"
                        variants={letterAnimation}
                        animate={isInView ? "visible" : "hidden"}>
                <h3>THIS IS DECENTRALAND</h3>
                <AnimatedCharacters type={'heading1'} text={text}/>
            </motion.div>
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

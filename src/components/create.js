import React, {useRef, useState} from 'react'
import {motion} from "framer-motion";
import PropTypes from 'prop-types'
import './create.css'
import AnimatedText from "./AnimatedText";
import { useInView } from "framer-motion"



const Create = (props) => {
    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025
            }
        }
    };
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <motion.section

            initial="hidden"
            variants={container}
            animate={isInView ? "visible" : "hidden"}
        >

                <h2 className={`section-index`}>01</h2>
                <div className={`text-container`} ref={ref}>
                    <AnimatedText type={'heading1'} text={'Create'}/>
                    <div>
                        <h3>MULTIPLE CREATIVE TOOLS</h3>
                        <p>From wearables, emotes, scenes, or even names, there is an infinity of things to create and
                            imagine!
                            Explore all the creative tools in decentraland.</p>
                        <button className={`btn_inverted`}>START DEVELOPING</button>
                    </div>
                </div>
                <div className={`img-container`}>
                    <img
                        alt={props.img_alt}
                        src={props.img_src}
                        className="create-img"
                    />
                </div>
        </motion.section>
    )
}

Create.defaultProps = {
    img_src: '/playground_assets/create.png',
    img_alt: 'image',
    rootClassName: '',
}

Create.propTypes = {
    img_src: PropTypes.string,
    img_alt: PropTypes.string,
    rootClassName: PropTypes.string,
}

export default Create

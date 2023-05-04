import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types'
import './worlds.css'
import {useInView} from "framer-motion"
import AnimatedCharacters from "./AnimatedCharacters";
import AnimatedWords from "./AnimatedWords";
import {
    motion,
} from "framer-motion";

const imgAnimation = {
    hidden: {
        y: -30,
        opacity: 0,
        rotate: 0,
        transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75}
    },
    visible: {
        y: 0,
        opacity: 1,
        rotateX: 5,
        transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75},
    }
};

const pAnimation = {
    hidden: {
        y: 15,
        opacity: 0,
        transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75}
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {staggerChildren: 0.03, ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75},
    }
};

export default function Worlds(props) {
    const ref = useRef(null);
    const isInView = useInView(ref, {amount: 0.5});

    return (
        <>
            <div className='worlds__container' ref={ref}>
                <motion.div ref={ref}
                            initial="hidden"
                            variants={pAnimation}
                            animate={isInView ? "visible" : "hidden"}
                            className='worlds__container-text'>
                    <AnimatedCharacters type={'heading1'} text={'Worlds'}></AnimatedCharacters>
                    <AnimatedWords type={'heading3'} text={'Your Personal Space in the Metaverse'} y={'100%'}/>
                    <motion.div className='worlds__container-img worlds__container-mobile-img'>
                        <img src={props.img_src} alt={props.img_alt}/>
                    </motion.div>
                    <p>With just a Decentraland NAME you can claim your own corner of the metaverse, separate from the
                        open world of Decentraland, where you can build, experiment, host events whatever you want, it’s
                        your
                        World! </p>
                    <div className='worlds__container-btn'>
                        <button>START DEVELOPING</button>
                        <button>START DEVELOPING</button>
                    </div>

                </motion.div>
                <motion.div
                    className='worlds__container-img worlds__container-desktop-img'
                    initial="hidden"
                    variants={imgAnimation}
                    animate={isInView ? "visible" : "hidden"}>
                    <img src={props.img_src} alt={props.img_alt}/>
                </motion.div>
            </div>
        </>
    );
}


Worlds.defaultProps = {
    img_src: '/playground_assets/worlds.png',
    img_alt: 'image',
    rootClassName: '',
}

Worlds.propTypes = {
    img_src: PropTypes.string,
    img_alt: PropTypes.string,
    rootClassName: PropTypes.string,
}

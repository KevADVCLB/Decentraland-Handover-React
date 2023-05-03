import React from 'react'
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import PropTypes from 'prop-types'
import './f-qs-section.css'


const Accordion = ({title, children, i, expanded, setExpanded}) => {
    const isOpen = i === expanded;

    return (
        <>
            <motion.div
                initial={false}
                onClick={() => setExpanded(isOpen ? false : i)}
                className={isOpen ? "open" : "close"}
            >
                <div className={`faqs-question`}>
                    <h3>{title}</h3>
                    <svg className={isOpen ? "open" : "close"} width="72" height="72" viewBox="0 0 72 72" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <circle opacity={isOpen ? "1" : "0.2"} cx="36" cy="36" r="35" stroke="white"
                                fill={isOpen ? "white" : "none"} strokeWidth="2"/>
                        <g clipPath="url(#clip0_529_3930)">
                            <path
                                d="M45 33.0022L42.885 30.8872L36 37.7572L29.115 30.8872L27 33.0022L36 42.0022L45 33.0022Z"
                                fill={isOpen ? "#242129" : "white"}/>
                        </g>
                        <defs>
                            <clipPath id="clip0_529_3930">
                                <rect width="36" height="36" fill="white" transform="translate(54 18) rotate(90)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.section
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                                open: {opacity: 1, height: 'auto', y: 0},
                                collapsed: {opacity: 0, height: 0, y: -60}
                            }}
                            transition={{duration: 1.2, ease: [0.16, 1, 0.3, 1], opacity: {duration: 0.4,  ease: [0.22, 1, 0.36, 1]}}}
                        >
                            <p>{children}</p>
                        </motion.section>
                    )}
                </AnimatePresence>
            </motion.div>

        </>
    );
};

export const FAQsSection = () => {
    // This approach is if you only want max one section open at a time. If you want multiple
    // sections to potentially be open simultaneously, they can all be given their own `useState`.

    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <section className={`faqs-container`}>
                <div className={`faqs-content`}>
                    <h2>Learn more about Decentraland</h2>
                    <h1>Frequently Asked Questions</h1>
                    <Accordion title="What is Metaverse?" i={1} expanded={expanded} setExpanded={setExpanded}>In the
                        metaverse, users
                        traverse a virtual world that mimics aspects of the physical world using such technologies such
                        as virtual reality (VR), augmented reality (AR), AI, social media and digital currency. The
                        internet is something that people "browse." But, to a degree, people can "live" in the
                        metaverse.</Accordion>
                    <Accordion title="What is DAO??" i={2} expanded={expanded} setExpanded={setExpanded}>In the
                        metaverse, users
                        traverse a virtual world that mimics aspects of the physical world using such technologies such
                        as virtual reality (VR), augmented reality (AR), AI, social media and digital currency. The
                        internet is something that people "browse." But, to a degree, people can "live" in the
                        metaverse.</Accordion>
                    <Accordion title="What is DCL’s economy?" i={3} expanded={expanded} setExpanded={setExpanded}>In the
                        metaverse, users
                        traverse a virtual world that mimics aspects of the physical world using such technologies such
                        as virtual reality (VR), augmented reality (AR), AI, social media and digital currency. The
                        internet is something that people "browse." But, to a degree, people can "live" in the
                        metaverse.</Accordion>
                    <Accordion title="How can one get MANA?" i={4} expanded={expanded} setExpanded={setExpanded}>In the
                        metaverse, users
                        traverse a virtual world that mimics aspects of the physical world using such technologies such
                        as virtual reality (VR), augmented reality (AR), AI, social media and digital currency. The
                        internet is something that people "browse." But, to a degree, people can "live" in the
                        metaverse.</Accordion>
                </div>
            </section>

        </>
    )
};

FAQsSection.defaultProps = {
    Rectangle12259_src: '/playground_assets/rectangle12259i475-vn-200h.png',
    rootClassName: '',
}

FAQsSection.propTypes = {
    Rectangle12259_src: PropTypes.string,
    rootClassName: PropTypes.string,
}

export default FAQsSection

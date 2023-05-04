import React from 'react'
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import PropTypes from 'prop-types'
import './f-qs-section.css'

const FAQsSection = (props) => {
    return (
        <section className={`faqs-section`}>
            <div className={`section-container`}>
                <h2>Learn more about Decentraland</h2>
                <h1>Frequently Asked Questions</h1>
                <div>
                    <h3>What is <span>Metaverse?</span></h3>
                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.2" cx="36" cy="36" r="35" stroke="white" strokeWidth="2"/>
                        <g clipPath="url(#clip0_529_3930)">
                            <path
                                d="M45 33.0022L42.885 30.8872L36 37.7572L29.115 30.8872L27 33.0022L36 42.0022L45 33.0022Z"
                                fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_529_3930">
                                <rect width="36" height="36" fill="white" transform="translate(54 18) rotate(90)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div>
                    <h3>What is <span>Metaverse?</span></h3>
                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.2" cx="36" cy="36" r="35" stroke="white" strokeWidth="2"/>
                        <g clipPath="url(#clip0_529_3930)">
                            <path
                                d="M45 33.0022L42.885 30.8872L36 37.7572L29.115 30.8872L27 33.0022L36 42.0022L45 33.0022Z"
                                fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_529_3930">
                                <rect width="36" height="36" fill="white" transform="translate(54 18) rotate(90)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div>
                    <h3>What is <span>Metaverse?</span></h3>
                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.2" cx="36" cy="36" r="35" stroke="white" strokeWidth="2"/>
                        <g clipPath="url(#clip0_529_3930)">
                            <path
                                d="M45 33.0022L42.885 30.8872L36 37.7572L29.115 30.8872L27 33.0022L36 42.0022L45 33.0022Z"
                                fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_529_3930">
                                <rect width="36" height="36" fill="white" transform="translate(54 18) rotate(90)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div>
                    <h3>What is <span>Metaverse?</span></h3>
                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.2" cx="36" cy="36" r="35" stroke="white" strokeWidth="2"/>
                        <g clipPath="url(#clip0_529_3930)">
                            <path
                                d="M45 33.0022L42.885 30.8872L36 37.7572L29.115 30.8872L27 33.0022L36 42.0022L45 33.0022Z"
                                fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_529_3930">
                                <rect width="36" height="36" fill="white" transform="translate(54 18) rotate(90)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                </div>
            </section>
    )
}

FAQsSection.defaultProps = {
    Rectangle12259_src: '/playground_assets/rectangle12259i475-vn-200h.png',
    rootClassName: '',
}

FAQsSection.propTypes = {
    Rectangle12259_src: PropTypes.string,
    rootClassName: PropTypes.string,
}

export default FAQsSection

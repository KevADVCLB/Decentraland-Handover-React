import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types'
import './missions.css'
import {useInView} from "framer-motion"
import AnimatedCharacters from "./AnimatedCharacters";
import AnimatedWords from "./AnimatedWords";
import {
    motion,
} from "framer-motion";
import SellSVG from "../svg-illustration/sellSVG";
import CreateSVG from "../svg-illustration/createSVG";
import InfluenceSVG from "../svg-illustration/influence_SVG";

const letterAnimation = {
    visible: {
        transition: {
            staggerChildren: 0.03
        }
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
function Section({children}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {amount: 0.5, once: true});

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            variants={letterAnimation}
            animate={isInView ? "visible" : "hidden"}
        >
            {children}
        </motion.section>
    )
}

export default function Missions(props) {
    const createRef = useRef(null);
    const sellRef = useRef(null);
    const influenceRef = useRef(null);

    const createInView = useInView(createRef, {amount: 0.5});
    const sellInView = useInView(sellRef, {amount: 0.5});
    const influenceInView = useInView(influenceRef, {amount: 0.5});


    return (
        <>
            <div className={`missions__container`}>
                <div>
                    <Section>
                        <div className={`missions__container-index missions__container-desktop`}><AnimatedWords type={'heading2'} text={'01'}
                                                                                y={'50%'}/></div>
                        <div className={`missions__container-text`} ref={createRef}>
                            <div>
                                <h2 className={`missions__container-index missions__container-mobile`}>01</h2>
                                <AnimatedCharacters type={'heading1'} text={'Create'}/>
                            </div>
                            <div
                                className={`missions__container-img missions__container-mobile ${createInView && !sellInView ? "missions__container-img-visible" : ""} `}>
                                <CreateSVG id='mobile'/>
                            </div>
                            <motion.div variants={pAnimation}>
                                <AnimatedWords type={'heading3'} text={'MULTIPLE CREATIVE TOOLS'} y={'200%'}/>
                                <p>
                                    From wearables, emotes, scenes, or even names,
                                    there
                                    is an
                                    infinity of things to create and
                                    imagine!
                                    Explore all the creative tools in decentraland.
                                </p>
                                <button className={`btn_inverted`}>START DEVELOPING</button>
                            </motion.div>
                        </div>
                    </Section>

                    <Section>
                        <div className={`missions__container-index missions__container-desktop`}><AnimatedWords type={'heading2'} text={'02'}
                                                                                y={'50%'}/>
                        </div>
                        <div className={`missions__container-text`} ref={sellRef}>
                            <div>
                                <h2 className={`missions__container-index missions__container-mobile`}>02</h2>
                                <AnimatedCharacters type={'heading1'} text={'Sell'}/>
                            </div>
                            <div
                                className={`missions__container-img missions__container-mobile ${sellInView && !influenceInView ? "missions__container-img-visible" : ""} `}>
                                <SellSVG id='mobile'/>
                            </div>
                            <motion.div variants={pAnimation}>
                                <AnimatedWords type={'heading3'} text={'UNIQUE DECENTRAL MARKET'} y={'200%'}/>
                                <motion.p variants={pAnimation}>Is your new outfit grasping a lot of attention? Buy and
                                    sell
                                    LAND, Estates, Avatar
                                    wearables
                                    and names in the Decentraland Marketplace: stocking the very best digital goods
                                    backed
                                    by
                                    the ethereum blockchain.
                                </motion.p>
                                <button>GO TO MARKETPLACE</button>
                            </motion.div>
                        </div>
                    </Section>
                    <Section>
                        <div className={`missions__container-index missions__container-desktop`}><AnimatedWords type={'heading2'} text={'03'}
                                                                                y={'50%'}/>
                        </div>
                        <div className={`missions__container-text`} ref={influenceRef}>
                            <div>
                                <h2 className={`missions__container-index missions__container-mobile`}>03</h2>
                                <AnimatedCharacters type={'heading1'} text={'Influence'}/>
                            </div>
                            <div
                                className={`missions__container-img missions__container-mobile ${influenceInView ? "missions__container-img-visible" : ""} `}>
                                <InfluenceSVG id={'mobile'}/>
                            </div>
                            <motion.div variants={pAnimation}>
                                <AnimatedWords type={'heading3'} text={'UNIQUE DECENTRAL MARKET'} y={'200%'}/>
                                <motion.p variants={pAnimation}>Through the DAO, you are in control of the policies
                                    created
                                    to determine how the world
                                    behaves: for example, what kinds of wearable items are allowed (or disallowed) after
                                    the
                                    launch of the DAO, moderation of content, LAND policy and auctions, among others.
                                </motion.p>
                                <button>Learn more about DAO</button>
                            </motion.div>
                        </div>

                    </Section>
                </div>

                <div className={`missions__container-sticky missions__container-desktop`}>
                    <div>
                        <div
                            className={`missions__container-img ${createInView && !sellInView ? "missions__container-img-visible" : ""} `}
                            style={{zIndex: 0}}>
                            <CreateSVG id={'desktop'}/>
                        </div>

                        <div
                            className={`missions__container-img ${sellInView && !influenceInView ? "missions__container-img-visible" : ""} `}
                            style={{zIndex: 1}}>
                            <SellSVG id={'desktop'}/>
                        </div>
                        <div
                            className={`missions__container-img ${influenceInView ? "missions__container-img-visible" : ""} `}
                            style={{zIndex: 2}}>
                            <InfluenceSVG id={'desktop'}/>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}


Missions.defaultProps = {
    img_src_create_character: '/playground_assets/create_character.png',
    img_src_create_gradient: '/playground_assets/create_gradient.png',
    img_src_sell_character: '/playground_assets/sell_character.png',
    img_src_sell_gradient: '/playground_assets/sell_gradient.png',
    img_src_influence_character: '/playground_assets/character_influence.png',
    img_src_influence_gradient: '/playground_assets/influence_gradient.png',
    img_src_shadow: '/playground_assets/ring_shadow.png',
    img_src_ring: '/playground_assets/ring_shadow.png',
    img_src_sell: '/playground_assets/sell_img.png',
    img_src_influence: '/playground_assets/influence_img.png',
    img_alt: 'image',
    rootClassName: '',
}

Missions.propTypes = {
    img_src: PropTypes.string,
    img_alt: PropTypes.string,
    rootClassName: PropTypes.string,
}

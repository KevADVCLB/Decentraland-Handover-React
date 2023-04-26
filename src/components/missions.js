import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types'
import './missions.css'
import AnimatedText from "./AnimatedCharacters";
import {useInView} from "framer-motion"
import AnimatedCharacters from "./AnimatedCharacters";
import AnimatedWords from "./AnimatedWords";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";

const container = {
    visible: {
        transition: {
            staggerChildren: 0.03
        }
    }
};

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Section({children}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {amount: 0.2});

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            variants={container}
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

    const createInView = useInView(createRef, {amount: 0.8});
    const sellInView = useInView(sellRef, {amount: 0.8});
    const influenceInView = useInView(influenceRef, {amount: 0.8});

    return (
        <>
            <div className={`sticky-container`}>
                <Section>
                    <h2 className={`section-index desktop`}>01</h2>
                    <div ref={createRef} className={`text-container`}>
                        <div><h2 className={`section-index mobile`}>01</h2>
                            <AnimatedCharacters type={'heading1'} text={'Create'}/>
                        </div>
                        <div className={`img-container mobile ${createInView && !sellInView ? "visible" : "hidden"} `}>
                            <img
                                alt={props.img_alt}
                                src={props.img_src_create}
                            />
                        </div>
                        <div>
                            <AnimatedWords type={'heading3'} text={'MULTIPLE CREATIVE TOOLS'}/>
                            <p>From wearables, emotes, scenes, or even names,
                                there
                                is an
                                infinity of things to create and
                                imagine!
                                Explore all the creative tools in decentraland.</p>
                            <button className={`btn_inverted`}>START DEVELOPING</button>
                        </div>
                    </div>
                    <div className={`img-container desktop ${createInView && !sellInView ? "visible" : "hidden"} `}>
                        <img
                            alt={props.img_alt}
                            src={props.img_src_create}
                        />
                    </div>
                </Section>

                <Section><h2 className={`section-index desktop`}>02</h2>
                    <div className={`text-container`}>
                        <div>
                            <h2 className={`section-index mobile`}>02</h2>
                            <AnimatedCharacters type={'heading1'} text={'Sell'}/>
                        </div>
                        <div
                            className={`img-container mobile ${sellInView && !influenceInView ? "visible" : "hidden"} `}>
                            <img
                                alt={props.img_alt}
                                src={props.img_src_sell}
                            />
                        </div>
                        <div ref={sellRef}>
                            <AnimatedWords type={'heading3'} text={'UNIQUE DECENTRAL MARKET'}/>
                            <p>Is your new outfit grasping a lot of attention? Buy and sell LAND, Estates, Avatar
                                wearables
                                and names in the Decentraland Marketplace: stocking the very best digital goods backed
                                by
                                the ethereum blockchain.</p>
                            <button>GO TO MARKETPLACE</button>
                        </div>
                    </div>
                    <div className={`img-container desktop ${sellInView && !influenceInView ? "visible" : "hidden"} `}>
                        <img
                            alt={props.img_alt}
                            src={props.img_src_sell}
                        />
                    </div>
                </Section>

                <Section><h2 className={`section-index desktop`}>03</h2>
                    <div className={`text-container`}>
                        <div>
                            <h2 className={`section-index mobile`}>03</h2>
                            <AnimatedCharacters type={'heading1'} text={'Influence'}/>
                        </div>
                        <div className={`img-container mobile ${influenceInView ? "visible" : "hidden"} `}>
                            <img
                                alt={props.img_alt}
                                src={props.img_src_influence}
                            />
                        </div>
                        <div ref={influenceRef}>
                            <AnimatedWords type={'heading3'} text={'UNIQUE DECENTRAL MARKET'}/>
                            <p>Through the DAO, you are in control of the policies created to determine how the world
                                behaves: for example, what kinds of wearable items are allowed (or disallowed) after the
                                launch of the DAO, moderation of content, LAND policy and auctions, among others.</p>
                            <button>Learn more about DAO</button>
                        </div>
                    </div>
                    <div className={`img-container desktop ${influenceInView ? "visible" : "hidden"} `}>
                        <img
                            alt={props.img_alt}
                            src={props.img_src_influence}
                        />
                    </div>
                </Section>

            </div>
        </>
    );
}


Missions.defaultProps = {
    img_src_create: '/playground_assets/create.png',
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

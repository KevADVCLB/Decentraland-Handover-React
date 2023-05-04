import React from 'react'
import {Helmet} from 'react-helmet'
import Trending from '../components/trending'

import './landing.css'
import Missions from "../components/missions";
import Worlds from "../components/worlds";

const Landing = (props) => {
    return (
        <div className="landing-container">
            <Helmet>
                <title>exported project</title>
            </Helmet>
            <div className="landing-main">
                {/*<Header rootClassName="header-root-class-name"></Header>*/}
                {/*<Hero rootClassName="hero-root-class-name"></Hero>*/}
                {/*<button className="landing-button-big">*/}
                {/*  <span className="landing-text">*/}
                {/*    <span>START DEVELOPING</span>*/}
                {/*  </span>*/}
                {/*</button>*/}
                {/*<Events rootClassName="events-root-class-name"></Events>*/}
                {/*<News rootClassName="news-root-class-name"></News>*/}

                {/*<About rootClassName="about-root-class-name"></About>*/}
                <Missions rootClassName="create-root-class-name"></Missions>
                <Worlds/>
                {/*<Sell rootClassName="sell-root-class-name"></Sell>*/}
                {/*<Influence rootClassName="influence-root-class-name"></Influence>*/}


                {/*<img*/}
                {/*  alt="Divider054749"*/}
                {/*  src="/playground_assets/divider054749-qon.svg"*/}
                {/*  className="landing-divider05"*/}
                {/*/>*/}
                {/*<Trending></Trending>*/}
                {/*<Discover rootClassName="discover-root-class-name"></Discover>*/}
                {/*<FAQsSection rootClassName="f-qs-section-root-class-name"></FAQsSection>*/}
                {/*<Footer rootClassName="footer-root-class-name"></Footer>*/}
            </div>
        </div>
    )
}

export default Landing

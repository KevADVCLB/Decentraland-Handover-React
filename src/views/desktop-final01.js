import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Hero from '../components/hero'
import Events from '../components/events'
import News from '../components/news'
import About from '../components/about'
import Missions from '../components/missions'
import Sell from '../components/sell'
import Influence from '../components/influence'
import Trending from '../components/trending'
import Discover from '../components/discover'
import FAQsSection from '../components/f-qs-section'
import Footer from '../components/footer'
import './desktop-final01.css'

const DesktopFinal01 = (props) => {
  return (
    <div className="desktop-final01-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="desktop-final01-desktop-final01">
        <Header rootClassName="header-root-class-name"></Header>
        <Hero rootClassName="hero-root-class-name"></Hero>
        <button className="desktop-final01-button-big">
          <span className="desktop-final01-text">
            <span>START DEVELOPING</span>
          </span>
        </button>
        <Events rootClassName="events-root-class-name"></Events>
        <News rootClassName="news-root-class-name"></News>
        <About rootClassName="about-root-class-name"></About>
        <Missions rootClassName="create-root-class-name"></Missions>
        <Sell rootClassName="sell-root-class-name"></Sell>
        <Influence rootClassName="influence-root-class-name"></Influence>
        <img
          alt="Divider054749"
          src="/playground_assets/divider054749-qon.svg"
          className="desktop-final01-divider05"
        />
        <Trending rootClassName="trending-root-class-name"></Trending>
        <Discover rootClassName="discover-root-class-name"></Discover>
        <FAQsSection rootClassName="f-qs-section-root-class-name"></FAQsSection>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
    </div>
  )
}

export default DesktopFinal01

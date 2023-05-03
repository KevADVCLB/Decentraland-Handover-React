import React from 'react'

import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <div className={`hero-hero ${props.rootClassName} `}>
      <img
        alt={props.HeroBG_alt}
        src={props.HeroBG_src}
        className="hero-hero-bg"
      />
      {/*<img*/}
      {/*  alt={props.Decentraland_alt}*/}
      {/*  src={props.Decentraland_src}*/}
      {/*  className="hero-decentraland"*/}
      {/*/>*/}
      {/*<img*/}
      {/*  alt={props.HeroImage_alt}*/}
      {/*  src={props.HeroImage_src}*/}
      {/*  className="hero-hero-image"*/}
      {/*/>*/}
      {/*<span className="hero-text DesktopIntroSubText">*/}
      {/*  <span className="">*/}
      {/*    Start exploring the world by downloading our desktop client for the*/}
      {/*    best experience.*/}
      {/*    <span*/}
      {/*      dangerouslySetInnerHTML={{*/}
      {/*        __html: ' ',*/}
      {/*      }}*/}
      {/*    />*/}
      {/*  </span>*/}
      {/*</span>*/}
      {/*<div className="hero-download-client">*/}
      {/*  <div className="hero-group4561">*/}
      {/*    <button className="hero-button">*/}
      {/*      <span className="hero-text02">*/}
      {/*        <span className="">Download client</span>*/}
      {/*      </span>*/}
      {/*      <span className="hero-text04">*/}
      {/*        <span className="">Recommended</span>*/}
      {/*      </span>*/}
      {/*      <img*/}
      {/*        alt={props.Frame_alt}*/}
      {/*        src={props.Frame_src}*/}
      {/*        className="hero-frame"*/}
      {/*      />*/}
      {/*      <img*/}
      {/*        alt={props.chevronright_alt}*/}
      {/*        src={props.chevronright_src}*/}
      {/*        className="hero-chevronright"*/}
      {/*      />*/}
      {/*    </button>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="hero-start-on-web">*/}
      {/*  <div className="hero-group45611">*/}
      {/*    <button className="hero-button1">*/}
      {/*      <span className="hero-text06">*/}
      {/*        <span className="">Start on Web</span>*/}
      {/*      </span>*/}
      {/*      <span className="hero-text08">*/}
      {/*        <span className="">Limited Experience</span>*/}
      {/*      </span>*/}
      {/*      <img*/}
      {/*        alt={props.chevronright_alt1}*/}
      {/*        src={props.chevronright_src1}*/}
      {/*        className="hero-chevronright1"*/}
      {/*      />*/}
      {/*    </button>*/}
      {/*  </div>*/}
      {/*  <div className="hero-group4755">*/}
      {/*    <img*/}
      {/*      alt={props.Ellipse289_alt}*/}
      {/*      src={props.Ellipse289_src}*/}
      {/*      className="hero-ellipse289"*/}
      {/*    />*/}
      {/*    <img*/}
      {/*      alt={props.globe02_alt}*/}
      {/*      src={props.globe02_src}*/}
      {/*      className="hero-globe02"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}

Hero.defaultProps = {
  HeroBG_src: '/playground_assets/herobg4750-5rva-1000h.png',
  HeroBG_alt: 'HeroBG4750',
  Decentraland_src: '/playground_assets/decentraland4750-7xv.svg',
  Decentraland_alt: 'Decentraland4750',
  HeroImage_src: '/playground_assets/heroimage4750-at6-900h.png',
  HeroImage_alt: 'HeroImage4750',
  Ellipse289_src: '/playground_assets/ellipse2894751-x0gp-200h.png',
  Ellipse289_alt: 'Ellipse2894751',
  globe02_src: '/playground_assets/globe024751-p1e.svg',
  globe02_alt: 'globe024751',
  Frame_src: '/playground_assets/frame4750-tjo.svg',
  Frame_alt: 'Frame4750',
  chevronright_src: '/playground_assets/chevronright4750-w6as.svg',
  chevronright_alt: 'chevronright4750',
  chevronright_src1: '/playground_assets/chevronright4751-oj33.svg',
  chevronright_alt1: 'chevronright4751',
  rootClassName: '',
}

Hero.propTypes = {
  HeroBG_src: PropTypes.string,
  HeroBG_alt: PropTypes.string,
  Decentraland_src: PropTypes.string,
  Decentraland_alt: PropTypes.string,
  HeroImage_src: PropTypes.string,
  HeroImage_alt: PropTypes.string,
  Ellipse289_src: PropTypes.string,
  Ellipse289_alt: PropTypes.string,
  globe02_src: PropTypes.string,
  globe02_alt: PropTypes.string,
  Frame_src: PropTypes.string,
  Frame_alt: PropTypes.string,
  chevronright_src: PropTypes.string,
  chevronright_alt: PropTypes.string,
  chevronright_src1: PropTypes.string,
  chevronright_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Hero

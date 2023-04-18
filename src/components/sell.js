import React from 'react'

import PropTypes from 'prop-types'

import './sell.css'

const Sell = (props) => {
  return (
    <div className={`sell-sell ${props.rootClassName} `}>
      <img
        alt={props.Divider03_alt}
        src={props.Divider03_src}
        className="sell-divider03"
      />
      <span className="sell-text DesktopNumber">
        <span className="">02</span>
      </span>
      <span className="sell-text02 DesktopHeading2">
        <span className="">Sell</span>
      </span>
      <span className="sell-text04 DesktopParagraph">
        <span className="">
          Is your new outfit grasping a lot of attention? Buy and sell LAND,
          Estates, Avatar wearables and names in the Decentraland Marketplace:
          stocking the very best digital goods backed by the ethereum
          blockchain.
        </span>
      </span>
      <button className="sell-gotomarketplac-button">
        <span className="sell-text06">
          <span className="">GO TO MARKETPLACE</span>
        </span>
      </button>
      <span className="sell-text08 DesktopSubtitle">
        <span className="">UNIQUE DECENTRAL MARKET</span>
      </span>
      <div className="sell-sell-image">
        <div className="sell-image-bg">
          <img
            alt={props.Rectangle12303_alt}
            src={props.Rectangle12303_src}
            className="sell-rectangle12303"
          />
        </div>
        <img
          alt={props.Ellipse251_alt}
          src={props.Ellipse251_src}
          className="sell-ellipse251"
        />
        <div className="sell-sell-image1">
          <img
            alt={props.untitled32_alt}
            src={props.untitled32_src}
            className="sell-untitled32"
          />
        </div>
      </div>
    </div>
  )
}

Sell.defaultProps = {
  Divider03_src: '/playground_assets/divider034749-2zo.svg',
  Divider03_alt: 'Divider034749',
  Ellipse251_src: '/playground_assets/ellipse2514749-edlo-700h.png',
  Ellipse251_alt: 'Ellipse2514749',
  Rectangle12303_src: '/playground_assets/rectangle123034749-t18-1100w.png',
  Rectangle12303_alt: 'Rectangle123034749',
  untitled32_src: '/playground_assets/untitled324749-s38-800w.png',
  untitled32_alt: 'untitled324749',
  rootClassName: '',
}

Sell.propTypes = {
  Divider03_src: PropTypes.string,
  Divider03_alt: PropTypes.string,
  Ellipse251_src: PropTypes.string,
  Ellipse251_alt: PropTypes.string,
  Rectangle12303_src: PropTypes.string,
  Rectangle12303_alt: PropTypes.string,
  untitled32_src: PropTypes.string,
  untitled32_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Sell

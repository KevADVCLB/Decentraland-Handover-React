import React from 'react'

import PropTypes from 'prop-types'

import './influence.css'

const Influence = (props) => {
  return (
    <div className={`influence-influence ${props.rootClassName} `}>
      <img
        alt={props.Divider04_alt}
        src={props.Divider04_src}
        className="influence-divider04"
      />
      <span className="influence-text DesktopNumber">
        <span className="">03</span>
      </span>
      <span className="influence-text02 DesktopHeading2">
        <span className="">Influence</span>
      </span>
      <span className="influence-text04 DesktopParagraph">
        <span className="">
          Through the DAO, you are in control of the policies created to
          determine how the world behaves: for example, what kinds of wearable
          items are allowed (or disallowed) after the launch of the DAO,
          moderation of content, LAND policy and auctions, among others.
        </span>
      </span>
      <button className="influence-learnmoreabout-da-button">
        <span className="influence-text06">
          <span className="">Learn more about DAO</span>
        </span>
      </button>
      <span className="influence-text08 DesktopSubtitle">
        <span className="">UNIQUE DECENTRAL MARKET</span>
      </span>
      <div className="influence-influence-image">
        <img
          alt={props.Ellipse251_alt}
          src={props.Ellipse251_src}
          className="influence-ellipse251"
        />
        <div className="influence-frame4514">
          <img
            alt={props.Rectangle12303_alt}
            src={props.Rectangle12303_src}
            className="influence-rectangle12303"
          />
          <img
            alt={props.Rectangle12304_alt}
            src={props.Rectangle12304_src}
            className="influence-rectangle12304"
          />
          <img
            alt={props.Rectangle12305_alt}
            src={props.Rectangle12305_src}
            className="influence-rectangle12305"
          />
          <img
            alt={props.Ellipse253_alt}
            src={props.Ellipse253_src}
            className="influence-ellipse253"
          />
          <img
            alt={props.Rectangle12236_alt}
            src={props.Rectangle12236_src}
            className="influence-rectangle12236"
          />
          <img
            alt={props.untitled43_alt}
            src={props.untitled43_src}
            className="influence-untitled43"
          />
        </div>
        <img
          alt={props.untitled44_alt}
          src={props.untitled44_src}
          className="influence-untitled44"
        />
      </div>
    </div>
  )
}

Influence.defaultProps = {
  Divider04_src: '/playground_assets/divider044749-321a.svg',
  Divider04_alt: 'Divider044749',
  Ellipse251_src: '/playground_assets/ellipse2514749-rutw-700h.png',
  Ellipse251_alt: 'Ellipse2514749',
  untitled44_src: '/playground_assets/untitled444749-a81-400h.png',
  untitled44_alt: 'untitled444749',
  Rectangle12303_src: '/playground_assets/rectangle123034749-oagb-800h.png',
  Rectangle12303_alt: 'Rectangle123034749',
  Rectangle12304_src: '/playground_assets/rectangle123044749-nxo6-1100h.png',
  Rectangle12304_alt: 'Rectangle123044749',
  Rectangle12305_src: '/playground_assets/rectangle123054749-sk1aq-1100h.png',
  Rectangle12305_alt: 'Rectangle123054749',
  Ellipse253_src: '/playground_assets/ellipse2534749-dcga-600w.png',
  Ellipse253_alt: 'Ellipse2534749',
  Rectangle12236_src: '/playground_assets/rectangle122364749-rh8g-700h.png',
  Rectangle12236_alt: 'Rectangle122364749',
  untitled43_src: '/playground_assets/untitled434749-hle5-900h.png',
  untitled43_alt: 'untitled434749',
  rootClassName: '',
}

Influence.propTypes = {
  Divider04_src: PropTypes.string,
  Divider04_alt: PropTypes.string,
  Ellipse251_src: PropTypes.string,
  Ellipse251_alt: PropTypes.string,
  untitled44_src: PropTypes.string,
  untitled44_alt: PropTypes.string,
  Rectangle12303_src: PropTypes.string,
  Rectangle12303_alt: PropTypes.string,
  Rectangle12304_src: PropTypes.string,
  Rectangle12304_alt: PropTypes.string,
  Rectangle12305_src: PropTypes.string,
  Rectangle12305_alt: PropTypes.string,
  Ellipse253_src: PropTypes.string,
  Ellipse253_alt: PropTypes.string,
  Rectangle12236_src: PropTypes.string,
  Rectangle12236_alt: PropTypes.string,
  untitled43_src: PropTypes.string,
  untitled43_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Influence

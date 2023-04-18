import React from 'react'

import PropTypes from 'prop-types'

import './footercontent.css'

const Footercontent = (props) => {
  return (
    <div className={`footercontent-footercontent ${props.rootClassName} `}>
      <div className="footercontent-resources">
        <div className="footercontent-links">
          <div className="footercontent-marketplace">
            <span className="footercontent-text DesktopLinks">
              <span className="">Marketplace</span>
            </span>
          </div>
          <div className="footercontent-blog">
            <span className="footercontent-text02 DesktopLinks">
              <span className="">Blog</span>
            </span>
          </div>
          <div className="footercontent-dao">
            <span className="footercontent-text04 DesktopLinks">
              <span className="">DAO</span>
            </span>
          </div>
          <div className="footercontent-events">
            <span className="footercontent-text06 DesktopLinks">
              <span className="">Events</span>
            </span>
          </div>
          <div className="footercontent-docs">
            <span className="footercontent-text08 DesktopLinks">
              <span className="">Docs</span>
            </span>
          </div>
          <div className="footercontent-builder">
            <span className="footercontent-text10 DesktopLinks">
              <span className="">Builder</span>
            </span>
          </div>
        </div>
        <span className="footercontent-text12 DesktopLinkTitle">
          <span className="">Resources</span>
        </span>
      </div>
      <div className="footercontent-connect">
        <span className="footercontent-text14 DesktopLinkTitle">
          <span className="">Connect</span>
        </span>
        <div className="footercontent-links1">
          <div className="footercontent-sendusanemail">
            <span className="footercontent-text16 DesktopLinks">
              <span className="">Send us an email</span>
            </span>
          </div>
          <div className="footercontent-github">
            <span className="footercontent-text18 DesktopLinks">
              <span className="">Github</span>
            </span>
          </div>
          <div className="footercontent-twitter">
            <span className="footercontent-text20 DesktopLinks">
              <span className="">Twitter</span>
            </span>
          </div>
          <div className="footercontent-reddit">
            <span className="footercontent-text22 DesktopLinks">
              <span className="">Reddit</span>
            </span>
          </div>
          <div className="footercontent-discord">
            <span className="footercontent-text24 DesktopLinks">
              <span className="">Discord</span>
            </span>
          </div>
        </div>
      </div>
      <div className="footercontent-dc-email-section">
        <img
          alt={props.SVG_alt}
          src={props.SVG_src}
          className="footercontent-svg"
        />
        <img
          alt={props.Rectangle42_alt}
          src={props.Rectangle42_src}
          className="footercontent-rectangle42"
        />
        <span className="footercontent-text26">
          <span className="">Enter e-mail address</span>
        </span>
        <img
          alt={props.DCLsmalllogo_alt}
          src={props.DCLsmalllogo_src}
          className="footercontent-d-lsmalllogo"
        />
        <span className="footercontent-text28">
          <span className="">Stay updated with</span>
          <span className=""> Decentraland</span>
        </span>
      </div>
      <div className="footercontent-legal-links">
        <div className="footercontent-privacy-policy">
          <span className="footercontent-text31 DesktopLegalText">
            <span className="">Privacy Policy</span>
          </span>
        </div>
        <div className="footercontent-codeof-ethics">
          <span className="footercontent-text33 DesktopLegalText">
            <span className="">Code of Ethics</span>
          </span>
        </div>
        <div className="footercontent-content-policy">
          <span className="footercontent-text35 DesktopLegalText">
            <span className="">Content Policy</span>
          </span>
        </div>
        <div className="footercontent-termsof-use">
          <span className="footercontent-text37 DesktopLegalText">
            <span className="">Terms of Use</span>
          </span>
        </div>
        <span className="footercontent-text39 DesktopLegalText">
          <span className="">© 2022 Decentraland</span>
        </span>
      </div>
    </div>
  )
}

Footercontent.defaultProps = {
  SVG_src: '/playground_assets/svg1294-6f3j.svg',
  SVG_alt: 'SVG1294',
  Rectangle42_src: '/playground_assets/rectangle424750-wgbs-200h.png',
  Rectangle42_alt: 'Rectangle424750',
  DCLsmalllogo_src: '/playground_assets/dclsmalllogo4750-tjvh.svg',
  DCLsmalllogo_alt: 'DCLsmalllogo4750',
  rootClassName: '',
}

Footercontent.propTypes = {
  SVG_src: PropTypes.string,
  SVG_alt: PropTypes.string,
  Rectangle42_src: PropTypes.string,
  Rectangle42_alt: PropTypes.string,
  DCLsmalllogo_src: PropTypes.string,
  DCLsmalllogo_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footercontent

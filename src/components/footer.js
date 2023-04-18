import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-footercontent ${props.rootClassName} `}>
      <div className="footer-resources">
        <div className="footer-links">
          <div className="footer-marketplace">
            <span className="footer-text DesktopLinks">
              <span className="">Marketplace</span>
            </span>
          </div>
          <div className="footer-blog">
            <span className="footer-text02 DesktopLinks">
              <span className="">Blog</span>
            </span>
          </div>
          <div className="footer-dao">
            <span className="footer-text04 DesktopLinks">
              <span className="">DAO</span>
            </span>
          </div>
          <div className="footer-events">
            <span className="footer-text06 DesktopLinks">
              <span className="">Events</span>
            </span>
          </div>
          <div className="footer-docs">
            <span className="footer-text08 DesktopLinks">
              <span className="">Docs</span>
            </span>
          </div>
          <div className="footer-builder">
            <span className="footer-text10 DesktopLinks">
              <span className="">Builder</span>
            </span>
          </div>
        </div>
        <span className="footer-text12 DesktopLinkTitle">
          <span className="">Resources</span>
        </span>
      </div>
      <div className="footer-connect">
        <span className="footer-text14 DesktopLinkTitle">
          <span className="">Connect</span>
        </span>
        <div className="footer-links1">
          <div className="footer-sendusanemail">
            <span className="footer-text16 DesktopLinks">
              <span className="">Send us an email</span>
            </span>
          </div>
          <div className="footer-github">
            <span className="footer-text18 DesktopLinks">
              <span className="">Github</span>
            </span>
          </div>
          <div className="footer-twitter">
            <span className="footer-text20 DesktopLinks">
              <span className="">Twitter</span>
            </span>
          </div>
          <div className="footer-reddit">
            <span className="footer-text22 DesktopLinks">
              <span className="">Reddit</span>
            </span>
          </div>
          <div className="footer-discord">
            <span className="footer-text24 DesktopLinks">
              <span className="">Discord</span>
            </span>
          </div>
        </div>
      </div>
      <div className="footer-dc-email-section">
        <img alt={props.SVG_alt} src={props.SVG_src} className="footer-svg" />
        <img
          alt={props.Rectangle42_alt}
          src={props.Rectangle42_src}
          className="footer-rectangle42"
        />
        <span className="footer-text26">
          <span className="">Enter e-mail address</span>
        </span>
        <img
          alt={props.DCLsmalllogo_alt}
          src={props.DCLsmalllogo_src}
          className="footer-d-lsmalllogo"
        />
        <span className="footer-text28">
          <span className="">Stay updated with</span>
          <span className=""> Decentraland</span>
        </span>
      </div>
      <div className="footer-legal-links">
        <div className="footer-privacy-policy">
          <span className="footer-text31 DesktopLegalText">
            <span className="">Privacy Policy</span>
          </span>
        </div>
        <div className="footer-codeof-ethics">
          <span className="footer-text33 DesktopLegalText">
            <span className="">Code of Ethics</span>
          </span>
        </div>
        <div className="footer-content-policy">
          <span className="footer-text35 DesktopLegalText">
            <span className="">Content Policy</span>
          </span>
        </div>
        <div className="footer-termsof-use">
          <span className="footer-text37 DesktopLegalText">
            <span className="">Terms of Use</span>
          </span>
        </div>
        <span className="footer-text39 DesktopLegalText">
          <span className="">© 2022 Decentraland</span>
        </span>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  SVG_src: '/playground_assets/svg1294-6f3j.svg',
  SVG_alt: 'SVG1294',
  Rectangle42_src: '/playground_assets/rectangle424750-wgbs-200h.png',
  Rectangle42_alt: 'Rectangle424750',
  DCLsmalllogo_src: '/playground_assets/dclsmalllogo4750-tjvh.svg',
  DCLsmalllogo_alt: 'DCLsmalllogo4750',
  rootClassName: '',
}

Footer.propTypes = {
  SVG_src: PropTypes.string,
  SVG_alt: PropTypes.string,
  Rectangle42_src: PropTypes.string,
  Rectangle42_alt: PropTypes.string,
  DCLsmalllogo_src: PropTypes.string,
  DCLsmalllogo_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer

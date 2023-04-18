import React from 'react'

import PropTypes from 'prop-types'

import './discover.css'

const Discover = (props) => {
  return (
    <div className={`discover-discover ${props.rootClassName} `}>
      <div className="discover-rental-card">
        <div className="discover-group4501">
          <div className="discover-group4656">
            <img
              alt={props.Ellipse222_alt}
              src={props.Ellipse222_src}
              className="discover-ellipse222"
            />
            <img
              alt={props.Ellipse221_alt}
              src={props.Ellipse221_src}
              className="discover-ellipse221"
            />
            <img
              alt={props.Ellipse223_alt}
              src={props.Ellipse223_src}
              className="discover-ellipse223"
            />
            <img
              alt={props.image8_alt}
              src={props.image8_src}
              className="discover-image8"
            />
          </div>
        </div>
        <div className="discover-group4658">
          <span className="discover-text">
            <span className="">
              Discover all of our current rental listings
            </span>
          </span>
        </div>
        <div className="discover-showlistings">
          <span className="discover-text2 DesktopHyperlink">
            <span className="">Show listings</span>
          </span>
        </div>
      </div>
      <div className="discover-team-branding-card">
        <span className="discover-text4">
          <span className="">
            Your brand belongs in the Metaverse. Let’s get you a team to build
            with.
          </span>
        </span>
        <div className="discover-showlistings1">
          <span className="discover-text6 DesktopHyperlink">
            <span className="">Show listings</span>
          </span>
        </div>
        <img
          alt={props.image30_alt}
          src={props.image30_src}
          className="discover-image30"
        />
      </div>
    </div>
  )
}

Discover.defaultProps = {
  image30_src: '/playground_assets/image304750-wj3-400w.png',
  image30_alt: 'image304750',
  Ellipse222_src: '/playground_assets/ellipse2224750-4bhn-600h.png',
  Ellipse222_alt: 'Ellipse2224750',
  Ellipse221_src: '/playground_assets/ellipse2214750-a1zj-500h.png',
  Ellipse221_alt: 'Ellipse2214750',
  Ellipse223_src: '/playground_assets/ellipse2234750-lgfu-500h.png',
  Ellipse223_alt: 'Ellipse2234750',
  image8_src: '/playground_assets/image84750-ytb-400w.png',
  image8_alt: 'image84750',
  rootClassName: '',
}

Discover.propTypes = {
  image30_src: PropTypes.string,
  image30_alt: PropTypes.string,
  Ellipse222_src: PropTypes.string,
  Ellipse222_alt: PropTypes.string,
  Ellipse221_src: PropTypes.string,
  Ellipse221_alt: PropTypes.string,
  Ellipse223_src: PropTypes.string,
  Ellipse223_alt: PropTypes.string,
  image8_src: PropTypes.string,
  image8_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Discover

import React from 'react'

import PropTypes from 'prop-types'

import './sell.css'

const Sell = (props) => {
  return (
      <section>
          <h2 className={`section-index`}>02</h2>
          <div className={`text-container`}>
              <h1>Sell</h1>
              <div>
                  <h3>UNIQUE DECENTRAL MARKET</h3>
                  <p>Is your new outfit grasping a lot of attention? Buy and sell LAND, Estates, Avatar wearables and names in the Decentraland Marketplace: stocking the very best digital goods backed by the ethereum blockchain.</p>
                  <button>GO TO MARKETPLACE</button>
              </div>
          </div>
          <div className={`img-container`} >
              <img
                  alt={props.img_alt}
                  src={props.img_src}
              />
          </div>
      </section>
  )
}

Sell.defaultProps = {
    img_src: '/playground_assets/sell_img.png',
    img_alt: 'image',
    rootClassName: '',
}

Sell.propTypes = {
    img_src: PropTypes.string,
    img_alt: PropTypes.string,
    rootClassName: PropTypes.string,
}

export default Sell

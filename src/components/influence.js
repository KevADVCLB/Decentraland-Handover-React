import React from 'react'

import PropTypes from 'prop-types'

import './influence.css'

const Influence = (props) => {
  return (
      <section className={`influence`}>
        <h2>03</h2>
        <div className={`text-container`}>
          <h1>Influence</h1>
          <div>
            <h3>UNIQUE DECENTRAL MARKET</h3>
            <p>Through the DAO, you are in control of the policies created to determine how the world behaves: for example, what kinds of wearable items are allowed (or disallowed) after the launch of the DAO, moderation of content, LAND policy and auctions, among others.</p>
            <button>Learn more about DAO</button>
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

Influence.defaultProps = {
  img_src: '/playground_assets/influence_img.png',
  img_alt: 'image',
  rootClassName: '',
}

Influence.propTypes = {
  img_src: PropTypes.string,
  img_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Influence

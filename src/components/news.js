import React from 'react'

import PropTypes from 'prop-types'

import './news.css'

const News = (props) => {
  return (
    <div className={`news-news ${props.rootClassName} `}>
      <span className="news-text DesktopHeading5">
        <span className="">What&apos;s New?</span>
      </span>
      <div className="news-card04">
        <img
          alt={props.image34_alt}
          src={props.image34_src}
          className="news-image34"
        />
        <span className="news-text02 DesktopDateText">
          <span className="">︎DEC 1</span>
        </span>
        <span className="news-text04">
          <span className="">ANNOUNCEMENT</span>
        </span>
        <div className="news-decentraland202-recap">
          <span className="news-text06 DesktopBlogtitle">
            <span className="">Decentraland 2022 Recap</span>
          </span>
        </div>
      </div>
      <div className="news-card03">
        <img
          alt={props.image35_alt}
          src={props.image35_src}
          className="news-image35"
        />
        <span className="news-text08 DesktopDateText">
          <span className="">︎DEC 23</span>
        </span>
        <span className="news-text10">
          <span className="">ANNOUNCEMENT</span>
        </span>
        <div className="news-introducingthe-decentralandeditor">
          <span className="news-text12 DesktopBlogtitle">
            <span className="">Introducing the Decentraland editor</span>
          </span>
        </div>
      </div>
      <div className="news-card02">
        <img
          alt={props.image37_alt}
          src={props.image37_src}
          className="news-image37"
        />
        <div className="news-blog-title">
          <span className="news-text14 DesktopBlogtitle">
            <span className="">
              Introducing Decentraland Worlds Beta: Your Own 3D Space in the
              Metaverse
            </span>
          </span>
        </div>
        <span className="news-text16 DesktopDateText">
          <span className="">︎DEC 1</span>
        </span>
        <span className="news-text18">
          <span className="">ANNOUNCEMENT</span>
        </span>
      </div>
      <div className="news-card01">
        <img
          alt={props.image37_alt1}
          src={props.image37_src1}
          className="news-image371"
        />
        <span className="news-text20 DesktopDateText">
          <span className="">︎DEC 1</span>
        </span>
        <span className="news-text22">
          <span className="">ANNOUNCEMENT</span>
        </span>
        <div className="news-lan-rentals-becomean-easy-processvia-decentralands-mark">
          <span className="news-text24 DesktopBlogtitle">
            <span className="">
              LAND Rentals Become an Easy Process via Decentraland’s Marketplace
            </span>
          </span>
        </div>
      </div>
      <button className="news-button-medium">
        <span className="news-text26">
          <span className="">SEE ALL POSTS</span>
        </span>
      </button>
    </div>
  )
}

News.defaultProps = {
  image34_src: '/playground_assets/image344750-7bha-300h.png',
  image34_alt: 'image344750',
  image35_src: '/playground_assets/image354750-qn6n-300h.png',
  image35_alt: 'image354750',
  image37_src: '/playground_assets/image374750-98ux-300h.png',
  image37_alt: 'image374750',
  image37_src1: '/playground_assets/image374750-uwe-300h.png',
  image37_alt1: 'image374750',
  rootClassName: '',
}

News.propTypes = {
  image34_src: PropTypes.string,
  image34_alt: PropTypes.string,
  image35_src: PropTypes.string,
  image35_alt: PropTypes.string,
  image37_src: PropTypes.string,
  image37_alt: PropTypes.string,
  image37_src1: PropTypes.string,
  image37_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default News

import React from 'react'

import PropTypes from 'prop-types'

import './create.css'

const Create = (props) => {
  return (
    <div className={`create-create ${props.rootClassName} `}>
      <span className="create-text DesktopNumber">
        <span className="">
          01
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
      </span>
      <span className="create-text02 DesktopHeading2">
        <span className="">Create</span>
      </span>
      <img
        alt={props.Divider02_alt}
        src={props.Divider02_src}
        className="create-divider02"
      />
      <div className="create-create-image">
        <img
          alt={props.Ellipse_alt}
          src={props.Ellipse_src}
          className="create-ellipse"
        />
        <div className="create-image-bg">
          <img
            alt={props.Rectangle12303_alt}
            src={props.Rectangle12303_src}
            className="create-rectangle12303"
          />
          <img
            alt={props.image16_alt}
            src={props.image16_src}
            className="create-image16"
          />
          <img
            alt={props.untitled42_alt}
            src={props.untitled42_src}
            className="create-untitled42"
          />
          <img
            alt={props.Rectangle12304_alt}
            src={props.Rectangle12304_src}
            className="create-rectangle12304"
          />
        </div>
        <img
          alt={props.CreateImage_alt}
          src={props.CreateImage_src}
          className="create-create-image1"
        />
      </div>
      <span className="create-text04 DesktopParagraph">
        <span className="">
          From wearables, emotes, scenes, or even names, there is an infinity of
          things to create and imagine! Explore all the creative tools in
          decentraland.
        </span>
      </span>
      <button className="create-star-bu-ildin-button">
        <span className="create-text06">
          <span className="">START BuILDING</span>
        </span>
      </button>
      <span className="create-text08 DesktopSubtitle">
        <span className="">MULTIPLE CREATIVE TOOLS</span>
      </span>
    </div>
  )
}

Create.defaultProps = {
  Divider02_src: '/playground_assets/divider024749-ieth.svg',
  Divider02_alt: 'Divider024749',
  Ellipse_src: '/playground_assets/ellipse4749-4vf-700h.png',
  Ellipse_alt: 'Ellipse4749',
  CreateImage_src: '/playground_assets/createimage4749-et0a-800h.png',
  CreateImage_alt: 'CreateImage4749',
  Rectangle12303_src: '/playground_assets/rectangle123034749-mq2k-800h.png',
  Rectangle12303_alt: 'Rectangle123034749',
  image16_src: '/playground_assets/image164749-y63-1100w.png',
  image16_alt: 'image164749',
  untitled42_src: '/playground_assets/untitled424749-qdwn-800h.png',
  untitled42_alt: 'untitled424749',
  Rectangle12304_src: '/playground_assets/rectangle123044749-sn2q-900h.png',
  Rectangle12304_alt: 'Rectangle123044749',
  rootClassName: '',
}

Create.propTypes = {
  Divider02_src: PropTypes.string,
  Divider02_alt: PropTypes.string,
  Ellipse_src: PropTypes.string,
  Ellipse_alt: PropTypes.string,
  CreateImage_src: PropTypes.string,
  CreateImage_alt: PropTypes.string,
  Rectangle12303_src: PropTypes.string,
  Rectangle12303_alt: PropTypes.string,
  image16_src: PropTypes.string,
  image16_alt: PropTypes.string,
  untitled42_src: PropTypes.string,
  untitled42_alt: PropTypes.string,
  Rectangle12304_src: PropTypes.string,
  Rectangle12304_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Create

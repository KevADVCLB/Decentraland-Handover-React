import React from 'react'

import PropTypes from 'prop-types'

import './nav.css'

const Nav = (props) => {
  return (
    <div className={`nav-nav ${props.rootClassName} `}>
      <div className="nav-bg">
        <img
          alt={props.Vector20_alt}
          src={props.Vector20_src}
          className="nav-vector20"
        />
      </div>
      <div className="nav-nav-items">
        <div className="nav-frame4672">
          <span className="nav-text DesktopNavLinks">
            <span className="">Explore</span>
          </span>
          <span className="nav-text02 DesktopNavLinks">
            <span className="">Create</span>
          </span>
          <span className="nav-text04 DesktopNavLinks">
            <span className="">Marketplace</span>
          </span>
          <span className="nav-text06 DesktopNavLinks">
            <span className="">Community</span>
          </span>
          <span className="nav-text08 DesktopNavLinks">
            <span className="">Blog</span>
          </span>
          <span className="nav-text10 DesktopNavLinks">
            <span className="">Docs</span>
          </span>
        </div>
        <img
          alt={props.IMAGE1_alt}
          src={props.IMAGE1_src}
          className="nav-image1"
        />
        <img
          alt={props.IMAGE2_alt}
          src={props.IMAGE2_src}
          className="nav-image2"
        />
        <img
          alt={props.IMAGE3_alt}
          src={props.IMAGE3_src}
          className="nav-image3"
        />
        <img
          alt={props.IMAGE4_alt}
          src={props.IMAGE4_src}
          className="nav-image4"
        />
        <img
          alt={props.IMAGE5_alt}
          src={props.IMAGE5_src}
          className="nav-image5"
        />
        <img
          alt={props.IMAGE6_alt}
          src={props.IMAGE6_src}
          className="nav-image6"
        />
        <div className="nav-buttons">
          <div className="nav-frame4591">
            <span className="nav-text12">
              <span className="">Start Exploring</span>
            </span>
          </div>
          <div className="nav-group4612">
            <img
              alt={props.Vector_alt}
              src={props.Vector_src}
              className="nav-vector"
            />
            <img
              alt={props.discordiconsvgrepocom1_alt}
              src={props.discordiconsvgrepocom1_src}
              className="nav-discordiconsvgrepocom1"
            />
            <img
              alt={props.Octiconsmarkgithub1_alt}
              src={props.Octiconsmarkgithub1_src}
              className="nav-octiconsmarkgithub1"
            />
            <div className="nav-group">
              <img
                alt={props.Vector_alt11}
                src={props.Vector_src11}
                className="nav-vector01"
              />
            </div>
          </div>
        </div>
        <div className="nav-decentralandmanalogo1">
          <div className="nav-group1">
            <img
              alt={props.Vector_alt1}
              src={props.Vector_src1}
              className="nav-vector02"
            />
            <img
              alt={props.Vector_alt2}
              src={props.Vector_src2}
              className="nav-vector03"
            />
            <img
              alt={props.Vector_alt3}
              src={props.Vector_src3}
              className="nav-vector04"
            />
            <img
              alt={props.Vector_alt4}
              src={props.Vector_src4}
              className="nav-vector05"
            />
            <img
              alt={props.Vector_alt5}
              src={props.Vector_src5}
              className="nav-vector06"
            />
            <img
              alt={props.Vector_alt6}
              src={props.Vector_src6}
              className="nav-vector07"
            />
            <img
              alt={props.Vector_alt7}
              src={props.Vector_src7}
              className="nav-vector08"
            />
            <img
              alt={props.Vector_alt8}
              src={props.Vector_src8}
              className="nav-vector09"
            />
            <img
              alt={props.Vector_alt9}
              src={props.Vector_src9}
              className="nav-vector10"
            />
            <img
              alt={props.Vector_alt10}
              src={props.Vector_src10}
              className="nav-vector11"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Nav.defaultProps = {
  Vector20_src: '/playground_assets/vector20i475-wbd.svg',
  Vector20_alt: 'Vector20I475',
  IMAGE1_src: '/playground_assets/image1i475-o9md-200h.png',
  IMAGE1_alt: 'IMAGE1I475',
  IMAGE2_src: '/playground_assets/image2i475-mf8f-200h.png',
  IMAGE2_alt: 'IMAGE2I475',
  IMAGE3_src: '/playground_assets/image3i475-4wfo-200h.png',
  IMAGE3_alt: 'IMAGE3I475',
  IMAGE4_src: '/playground_assets/image4i475-g4la-200h.png',
  IMAGE4_alt: 'IMAGE4I475',
  IMAGE5_src: '/playground_assets/image5i475-8vn-200h.png',
  IMAGE5_alt: 'IMAGE5I475',
  IMAGE6_src: '/playground_assets/image6i475-nyjv-200h.png',
  IMAGE6_alt: 'IMAGE6I475',
  Vector_src: '/playground_assets/vectori475-3utc.svg',
  Vector_alt: 'VectorI475',
  discordiconsvgrepocom1_src:
    '/playground_assets/discordiconsvgrepocom1i475-wd4n.svg',
  discordiconsvgrepocom1_alt: 'discordiconsvgrepocom1I475',
  Octiconsmarkgithub1_src:
    '/playground_assets/octiconsmarkgithub1i475-0fq9.svg',
  Octiconsmarkgithub1_alt: 'Octiconsmarkgithub1I475',
  Vector_src1: '/playground_assets/vectori475-ai3g.svg',
  Vector_alt1: 'VectorI475',
  Vector_src2: '/playground_assets/vectori475-casl.svg',
  Vector_alt2: 'VectorI475',
  Vector_src3: '/playground_assets/vectori475-d9jm.svg',
  Vector_alt3: 'VectorI475',
  Vector_src4: '/playground_assets/vectori475-02g.svg',
  Vector_alt4: 'VectorI475',
  Vector_src5: '/playground_assets/vectori475-8whl.svg',
  Vector_alt5: 'VectorI475',
  Vector_src6: '/playground_assets/vectori475-07io.svg',
  Vector_alt6: 'VectorI475',
  Vector_src7: '/playground_assets/vectori475-2oub.svg',
  Vector_alt7: 'VectorI475',
  Vector_src8: '/playground_assets/vectori475-5qh.svg',
  Vector_alt8: 'VectorI475',
  Vector_src9: '/playground_assets/vectori475-7ted.svg',
  Vector_alt9: 'VectorI475',
  Vector_src10: '/playground_assets/vectori475-n3gp.svg',
  Vector_alt10: 'VectorI475',
  Vector_src11: '/playground_assets/vectori475-cxju.svg',
  Vector_alt11: 'VectorI475',
  rootClassName: '',
}

Nav.propTypes = {
  Vector20_src: PropTypes.string,
  Vector20_alt: PropTypes.string,
  IMAGE1_src: PropTypes.string,
  IMAGE1_alt: PropTypes.string,
  IMAGE2_src: PropTypes.string,
  IMAGE2_alt: PropTypes.string,
  IMAGE3_src: PropTypes.string,
  IMAGE3_alt: PropTypes.string,
  IMAGE4_src: PropTypes.string,
  IMAGE4_alt: PropTypes.string,
  IMAGE5_src: PropTypes.string,
  IMAGE5_alt: PropTypes.string,
  IMAGE6_src: PropTypes.string,
  IMAGE6_alt: PropTypes.string,
  Vector_src: PropTypes.string,
  Vector_alt: PropTypes.string,
  discordiconsvgrepocom1_src: PropTypes.string,
  discordiconsvgrepocom1_alt: PropTypes.string,
  Octiconsmarkgithub1_src: PropTypes.string,
  Octiconsmarkgithub1_alt: PropTypes.string,
  Vector_src1: PropTypes.string,
  Vector_alt1: PropTypes.string,
  Vector_src2: PropTypes.string,
  Vector_alt2: PropTypes.string,
  Vector_src3: PropTypes.string,
  Vector_alt3: PropTypes.string,
  Vector_src4: PropTypes.string,
  Vector_alt4: PropTypes.string,
  Vector_src5: PropTypes.string,
  Vector_alt5: PropTypes.string,
  Vector_src6: PropTypes.string,
  Vector_alt6: PropTypes.string,
  Vector_src7: PropTypes.string,
  Vector_alt7: PropTypes.string,
  Vector_src8: PropTypes.string,
  Vector_alt8: PropTypes.string,
  Vector_src9: PropTypes.string,
  Vector_alt9: PropTypes.string,
  Vector_src10: PropTypes.string,
  Vector_alt10: PropTypes.string,
  Vector_src11: PropTypes.string,
  Vector_alt11: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Nav

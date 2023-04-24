import React from 'react'

import PropTypes from 'prop-types'

import './create.css'

const Create = (props) => {
    return (
        <section className={`create`}>
            <h2 className={`section-index`}>01</h2>
            <div className={`text-container`}>
                <h1>Create</h1>
                <div>
                    <h3>MULTIPLE CREATIVE TOOLS</h3>
                    <p>From wearables, emotes, scenes, or even names, there is an infinity of things to create and
                        imagine!
                        Explore all the creative tools in decentraland.</p>
                    <button>START BUILDING</button>
                    <button className={`btn_inverted`}>START DEVELOPING</button>
                </div>
            </div>
            <div className={`img-container`} >
                <img
                    alt={props.img_alt}
                    src={props.img_src}
                    className="create-img"
                />
            </div>
        </section>
    )
}

Create.defaultProps = {
    img_src: '/playground_assets/create.png',
    img_alt: 'image',
    rootClassName: '',
}

Create.propTypes = {
    img_src: PropTypes.string,
    img_alt: PropTypes.string,
    rootClassName: PropTypes.string,
}

export default Create

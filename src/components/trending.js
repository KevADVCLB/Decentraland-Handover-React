import React, {useRef} from 'react'
import PropTypes from 'prop-types'

import './trending.css'
import SwiperContainer from "./swipe";

const Trending = (props) => {

    return (
        <div className={'trending__container'}>
            <h1>Trending Items</h1>
            <SwiperContainer spacing={16}></SwiperContainer>
        </div>
    )
}


export default Trending

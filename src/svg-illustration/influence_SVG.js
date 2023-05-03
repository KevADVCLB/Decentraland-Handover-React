import React from 'react'


const InfluenceSVG = (props) => {

    const maskGradient = 'influence_gradient-' + props.id
    const maskCharacter = 'influence_character-' + props.id

    return (
        <svg width="100%" height="100%" version="1.1" viewBox="0 0 280 280">
            <defs>
                <clipPath id={maskGradient}>
                    <path
                        d="m113.57-102.1h-74.9v50.19c-28.728 19.519-47.6 52.46-47.6 89.81 0 59.923 48.577 108.5 108.5 108.5 59.923 0 108.5-48.577 108.5-108.5 0-55.179-41.19-100.74-94.5-107.61z"
                        strokeWidth=".35"/>
                </clipPath>
                <clipPath
                    id={maskCharacter}>
                    <path
                        d="m208.07 37.902c0 59.923-48.577 108.5-108.5 108.5-59.923 0-108.5-48.577-108.5-108.5 0-59.923 48.577-108.5 108.5-108.5 59.923 0 108.5 48.577 108.5 108.5z"
                        fill="#eb25d2" strokeWidth=".35"/>
                </clipPath>
            </defs>
            <g transform="translate(40.433 102.1)" >
                <image x="-40.433" y="-102.1" width="280" height="280" preserveAspectRatio="none"
                       href={props.img_src_shadow} className='shadow'/>
                <image x="-40.433" y="-102.1" width="280" height="280"
                       preserveAspectRatio="none"
                       href={props.img_src_influence_gradient} className='gradient' clipPath={`url(#${maskCharacter})`}/>
                <g clipPath={`url(#${maskGradient})`}>
                    <image x="-40.433" y="-102.1" width="280" height="280"
                           preserveAspectRatio="none" href={props.img_src_influence_character} className='character'
                    />
                </g>
            </g>
        </svg>
    )
}

InfluenceSVG.defaultProps = {
    img_src_influence_character: '/playground_assets/influence_character.png',
    img_src_influence_gradient: '/playground_assets/influence_gradient.png',
    img_src_shadow: '/playground_assets/ring_shadow.png',

}


export default InfluenceSVG

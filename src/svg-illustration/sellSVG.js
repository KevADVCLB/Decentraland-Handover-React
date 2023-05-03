import React from 'react'


const SellSVG = (props) => {
    const maskGradient = 'sell_gradient-' + props.id
    const maskCharacter = 'sell_character-' + props.id

    return (
        <>
            <svg width="100%" height="100%" version="1.1" viewBox="0 0 280 280">
                <defs>
                    <clipPath  id={maskGradient}>
                        <path d="m28.138 119.57c-45.105-39.449-49.691-107.99-10.242-153.1 39.449-45.106 107.99-49.691 153.1-10.242 45.105 39.449 49.691 107.99 10.242 153.1-39.449 45.106-107.99 49.691-153.1 10.242z"
                              fill="#eb25d2" strokeWidth=".35"/>
                    </clipPath>
                    <clipPath
                        id={maskCharacter}>
                        <path d="m47.067-102.1h90.65v38.397c41.102 15.44 70.35 55.106 70.35 101.6 0 40.735-22.449 76.228-55.65 94.781v45.219h-31.85l-7.35-19.95s-2.275 2.45-4.2 3.15-4.025 0.7-4.025 0.7c-0.98 0.7-1.8084 0.0584-2.1-0.35-2.6222 0.65555-6.4232-0.5551-8.4592-1.2036-0.68145-0.21735-1.1651-0.37135-1.3408-0.37135-0.56 0-0.93345-0.58345-1.05-0.875-0.98-0.28-1.575-1.5166-1.75-2.1l0.9828-10.812c-56.049-4.2357-100.21-51.055-100.21-108.19 0-40.879 22.607-76.477 56-94.975z"
                              strokeWidth=".35"/>
                    </clipPath>
                </defs>
                <g transform="translate(40.433 102.1)">
                    <image x="-40.433" y="-102.1" width="280" height="280" preserveAspectRatio="none"
                           href={props.img_src_shadow} className='shadow'/>
                    <image x="-40.433" y="-102.1" width="280" height="280" clipPath={`url(#${maskGradient})`} preserveAspectRatio="none"
                           href={props.img_src_sell_gradient} className='gradient'/>
                    <g >
                    <image x="-40.433" y="-102.1" width="280" height="280" preserveAspectRatio="none"
                           href={props.img_src_sell_character} className='character'/>
                    </g>
                </g>
            </svg>

        </>
    )
}

SellSVG.defaultProps = {
    img_src_sell_character: '/playground_assets/sell_character.png',
    img_src_sell_gradient: '/playground_assets/sell_gradient.png',
    img_src_shadow: '/playground_assets/ring_shadow.png',

}

export default SellSVG

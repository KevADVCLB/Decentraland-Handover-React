import React from 'react'


const CreateSVG = (props) => {
    const maskGradient = 'create_gradient-' + props.id
    const maskCharacter = 'create_character-' + props.id

    return (

        <svg width="100%" height="100%" version="1.1" viewBox="0 0 280 280">
            <defs>
                <clipPath id={maskGradient}>
                    <path
                        d="m28.138 119.57c-45.105-39.449-49.691-107.99-10.242-153.1 39.449-45.106 107.99-49.691 153.1-10.242 45.105 39.449 49.691 107.99 10.242 153.1-39.449 45.106-107.99 49.691-153.1 10.242z"
                        fill="#eb25d2" strokeWidth=".35"/>
                </clipPath>
                <clipPath
                    id={maskCharacter}>
                    <path
                        d="m137.72-102.1h-90.65v45.025c-33.394 18.498-56 54.097-56 94.975 0 59.923 48.577 108.5 108.5 108.5 59.923 0 108.5-48.577 108.5-108.5 0-46.497-29.248-86.163-70.35-101.6z"
                        strokeWidth=".35"/>
                </clipPath>
            </defs>
            <g transform="translate(40.433 102.1)" >
                <image x="-40.433" y="-102.1" width="280" height="280" preserveAspectRatio="none"
                       href={props.img_src_shadow} className='shadow'/>

                <image x="-40.433" y="-102.1" width="280" height="280" preserveAspectRatio="none"
                       clipPath={`url(#${maskGradient})`} href={props.img_src_create_gradient} className='gradient'/>
                <g clipPath={`url(#${maskCharacter})`}>
                <image x="-40.433" y="-102.1" width="280" height="280" preserveAspectRatio="none"
                        href={props.img_src_create_character} className='character'/>
                </g>
            </g>
        </svg>


    )
}

CreateSVG.defaultProps = {
    img_src_create_character: '/playground_assets/create_character.png',
    img_src_create_gradient: '/playground_assets/create_gradient.png',
    img_src_shadow: '/playground_assets/ring_shadow.png',
}


export default CreateSVG

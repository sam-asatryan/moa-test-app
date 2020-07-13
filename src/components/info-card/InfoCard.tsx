import React from 'react'
import './InfoCard.css'

type Props = {
    image: string
    title: string
    description?: string
    verbose?: boolean
    customStyles?: {}
}

const InfoCard = ({ image, title, description = '', verbose = false, customStyles = {} }: Props) => {
    return (
        <div className='card-info' style={customStyles}>
            <img className='card-info-image' src={image} alt={'logo'} style={{ width: verbose ? 138 : 90 }}/>
            <div className='card-info-title' style={{ fontSize: verbose ? 25 : 18 }}>{title}</div>
            {verbose && (
                <>
                    <div className='card-info-description'>{description}</div>
                    <button className='card-info-button'/>
                </>
            )}
        </div>
    )
}

export default InfoCard
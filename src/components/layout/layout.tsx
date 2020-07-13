import React    from 'react'
import InfoCard from '../info-card'

import './layout.css'

type TInfoCard = {
    image: string
    title: string
    description: string
}

type TGameCard = {
    image: string
    title: string
}

const Layout = () => {
    const moreInfoCards: TInfoCard[] = [
        {
            image      : '/images/settings.svg',
            title      : 'White Label Casino Solution',
            description: 'Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the industry\'s standard text ever since the 1500s, when an unknown printer took a galley make a type specimen',
        },
        {
            image      : '/images/settings.svg',
            title      : 'Turnkey Casino Solution',
            description: 'Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the industry\'s standard text ever since the 1500s, when an unknown printer took a galley make a type specimen',
        },
        {
            image      : '/images/settings.svg',
            title      : 'Sports Betting',
            description: 'Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the industry\'s standard text ever since the 1500s, when an unknown printer took a galley make a type specimen',
        },
        {
            image      : '/images/settings.svg',
            title      : 'Affliate Platform',
            description: 'Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the industry\'s standard text ever since the 1500s, when an unknown printer took a galley make a type specimen',
        },
        {
            image      : '/images/settings.svg',
            title      : 'Wallet Solution',
            description: 'Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the industry\'s standard text ever since the 1500s, when an unknown printer took a galley make a type specimen',
        },
        {
            image      : '/images/settings.svg',
            title      : 'Marketing products',
            description: 'Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the industry\'s standard text ever since the 1500s, when an unknown printer took a galley make a type specimen',
        },
    ]

    const moreGamesCards: TGameCard[] = [
        {
            image: '/images/settings.svg',
            title: 'Slot Games',
        },
        {
            image: '/images/settings.svg',
            title: 'Live Casino',
        },
        {
            image: '/images/settings.svg',
            title: 'Virtual Sports',
        },
        {
            image: '/images/settings.svg',
            title: 'Other skill games',
        },
        {
            image: '/images/settings.svg',
            title: 'POWER-BALL',
        },
        {
            image: '/images/settings.svg',
            title: 'Badugi',
        },
    ]

    return (
        <div className='layout'>
            <section className='more-info-products-section'>
                <h2 className='more-info-products-title'>More Information on Our Products</h2>
                <div className="products">
                    {moreInfoCards.map(({ image, title, description }) => (
                        <div className='product-item' key={title}>
                            <InfoCard image={image} title={title} description={description} verbose/>
                        </div>
                    ))}
                </div>
            </section>

            <section className='more-info-products-section'>
                <h2 className='more-info-services-title'>More Information about Our Services</h2>
                <div className="services">
                    <b>TODO</b> <small>add here some services</small>
                </div>
            </section>

            <section className='best-casino-games-section'>
                <h2 className='best-casino-games-title'>More Information about Our Services</h2>
                <div className="games">
                    {moreGamesCards.map(({ image, title }, index) => {
                        let customStyles: { background?: string } = {}
                        if (index === 0) {
                            customStyles.background = 'linear-gradient(to right, rgba(241, 241, 241, .2), rgba(241, 241, 241, 1))'
                        } else if (index === moreGamesCards.length - 1) {
                            customStyles.background = 'linear-gradient(to right, rgba(241, 241, 241, 1), rgba(241, 241, 241, .2))'
                        }
                        return (
                            <div className='game-item' key={title}>
                                <InfoCard image={image} title={title} customStyles={customStyles}/>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Layout
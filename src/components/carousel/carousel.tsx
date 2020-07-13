import React        from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './carousel.css'

const CarouselContainer = () => {
    return (
        <div className='carousel-container'>
            <Carousel
                autoPlay
                infiniteLoop
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                renderIndicator={(clickHandler, isSelected) => {
                    return (
                        <div style={{
                            borderRadius   : '50%',
                            width          : 17,
                            height         : 17,
                            backgroundColor: isSelected ? '#FFFFFF' : '#D1CECE',
                            display        : 'inline-flex',
                            margin         : 8,
                        }}/>
                    )
                }}
            >
                <div className='carousel-item'>
                    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                    <button className='carousel-button'/>
                </div>
                <div className='carousel-item'>
                    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                    <button className='carousel-button'/>
                </div>
                <div className='carousel-item'>
                    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                    <button className='carousel-button'/>
                </div>

            </Carousel>
        </div>
    )
}

export default CarouselContainer
import React             from 'react'
import HeaderLogo        from '../header-logo'
import HeaderMenu        from '../header-menu'
import CarouselContainer from '../carousel'

import './header.css'

const Header = () => {

    return (
        <div className='header'>
            <div className='header-container'>
                <div className='header-menu-container'>
                    <HeaderLogo/>
                    <HeaderMenu/>
                    <CarouselContainer/>
                </div>
            </div>
        </div>
    )
}

export default Header
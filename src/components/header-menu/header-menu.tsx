import React    from 'react'
import './header-menu.css'
import MenuItem from '../menu-item'

const HeaderMenu = () => {

    const menus: { title: string, children: string[] }[] = [
        {
            title   : 'Products',
            children: [ 'White Label Casino Solution', 'Turnkey Casino Solution', 'Sports Betting', 'Affliate Platform', 'Wallet Solution', 'Marketing products' ],
        },
        {
            title   : 'Services',
            children: [ 'White Label Casino Solution', 'Turnkey Casino Solution', 'Sports Betting', 'Affliate Platform', 'Wallet Solution', 'Marketing products' ],
        },
        {
            title   : 'Games',
            children: [ 'White Label Casino Solution', 'Turnkey Casino Solution', 'Sports Betting', 'Affliate Platform', 'Wallet Solution', 'Marketing products' ],
        },
        {
            title   : 'Company',
            children: [ 'White Label Casino Solution', 'Turnkey Casino Solution', 'Sports Betting', 'Affliate Platform', 'Wallet Solution', 'Marketing products' ],
        },
        {
            title   : 'ENG',
            children: [],
        },
        {
            title   : 'Contact Us',
            children: [],
        },
    ]

    return (
        <div className='header-menu'>
            <ul className='header-menu-container'>
                {menus.map(menu => <MenuItem key={menu.title} title={menu.title} children={menu.children}/>)}
            </ul>
        </div>
    )
}

export default HeaderMenu
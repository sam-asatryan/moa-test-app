import React, { useRef } from 'react'
import './menu-item.css'

interface Props {
    title: string
    children: string[]
}

const MenuItem = ({ title, children }: Props) => {
    // @ts-ignore
    const liRef = useRef<HTMLLIElement>(undefined)
    // @ts-ignore
    const ulRef = useRef<HTMLUListElement>(undefined)

    function getLeftPosition() {
        if (liRef.current && ulRef.current) {
            ulRef.current.style.left = Math.round((liRef.current.offsetWidth - ulRef.current.offsetWidth) / 2) + 'px'
        }
    }

    return (
        <li className='menu-item' onMouseOver={getLeftPosition} ref={liRef}>
            {title}
            {!!children.length && (
                <ul ref={ulRef}>
                    {children.map(submenu => <li key={submenu}>{submenu}</li>)}
                </ul>
            )}
        </li>
    )
}

export default MenuItem
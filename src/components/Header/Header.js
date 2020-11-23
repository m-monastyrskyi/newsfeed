import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.styles.scss'

const Header = () => {
    return (
        <header className={'header'}>
            <div className={'container'}>
                <h2 className={'header__slogan'}>The Newsfeed :)</h2>
                <nav className={'navigation'}>
                    <NavLink exact to="/" className={'navigation__item'}
                             activeClassName="navigation__item--active">Głowna</NavLink>
                    <NavLink exact to="/iso" className={'navigation__item'}
                             activeClassName="navigation__item--active">ISO</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header
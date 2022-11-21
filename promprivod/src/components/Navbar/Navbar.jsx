import React from 'react'
import "./NavbarStyles.css"
import logoRu from "../../assets/logo/logo_ru.png"
import { Icon } from 'react-icons-kit'
import {bars} from 'react-icons-kit/fa/bars'
import {times} from 'react-icons-kit/fa/times'
import { useState } from 'react'

const Navbar = () => {
    const [icon, setIcon] = useState(bars)

    const handleBarClick = () => {
        if(icon === bars) {
            setIcon(times)
        } else {
            setIcon(bars)
        }
    }

    return (
    <nav className='NavbarItems'>
      <h1><img src={logoRu} alt="промпривод" /></h1>
      <div className='menu-icons'>
        <Icon icon={icon} onClick= {handleBarClick}></Icon>
      </div>
      <ul className='nav-menu'>
        <li><a href='/' className='nav-links'>О компании</a></li>
        <li><a href='/'>Услуги</a></li>
        <li><a href='/'>Продукция</a></li>
        <li><a href='/'>Статьи</a></li>
        <li><a href='/'>Контакты</a></li>
        <li><a href='/'>Оформить заказ</a></li>
      </ul>
    </nav>
  )
}

export default Navbar

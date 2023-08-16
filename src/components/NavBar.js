"use client";
import style from './navBar.module.scss'
import Image from 'next/image'
import {useState} from 'react'

const DropdownLinks = ({ label, links }) => {
  const [show, setShow] = useState(false);

  return (
    <div onClick={() => setShow(!show)} className={style.dropdown}>
      <div className={style.link}>
        <p>{label}</p>
        <Image
          className={`${style.dropdownChev} ${show ? style.rotate: ''}`}
          src="/static/chevron.svg"
          width={10}
          height={10}
          alt="Logo"
        />
      </div>
      <ul className={`${style.dropdownList} ${show ? '' : style.hidden}`}>
        {links.map((link, idx) => {
          return (
            <li key={idx}>
              <Element {...link} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const Element = ({ label, link, links }) => {
  if (links) {
    return <DropdownLinks label={label} links={links} />
  }

  return <a className={style.link} href={link}>{label}</a>
}

export default function NavBar({ navElements }) {
  return (
    <nav className={style.nav}>
      <Image
        className={style.navLogo}
        src="/logo.svg"
        width={121}
        height={29}
        alt="Logo"
      />
      <div className={style.navLinks}>
        <div className={style.navElements}>
          {navElements?.map(el => <Element {...el} />)}
        </div>
        <div className={style.navUser}>
          <a className={style.navUserIcon} href="/profile">
            <Image
              src="/static/profile.svg"
              width={32}
              height={32}
              alt="Profile"
            />
          </a>
          <a className={style.navUserIcon} href="/cart">
            <Image
              src="/static/cart.svg"
              width={32}
              height={32}
              alt="Cart"
            />
          </a>
        </div>
      </div>
    </nav>
  )
}

"use client";
import style from './navBar.module.scss'
import Image from 'next/image'
import {useState, useEffect} from 'react'

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
      <div className={`${style.dropdownList} ${show ? '' : style.hidden}`}>
        {links.map((link, idx) => <Element  key={idx} {...link} />)}
      </div>
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
  const [show, setShow] = useState(false);

  useEffect(() => {
    const resizeEvent = addEventListener("resize", () => setShow(false));
    return () => removeEventListener(resizeEvent)
  }, [])

  return (
    <nav className={`${style.nav} ${show ? style.navShow : ''}`}>
      <Image
        className={style.navLogo}
        src="/logo.svg"
        width={121}
        height={29}
        alt="Logo"
      />
      <div className={`${style.navLinks}  ${show ? style.navLinksShow : ''}`}>
        <div className={`${style.navElements}  ${show ? style.navElementsShow : ''}`}>
          {navElements?.map((el, idx) => <Element key={idx} {...el} />)}
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
      <div onClick={() => setShow(!show)} className={style.navMenu}>
        <Image
          src={`/static/${show ? 'close' : 'menu'}.svg`}
          width={24}
          height={24}
          alt="Menu"
        />
      </div>
    </nav>
  )
}

import style from './navBar.module.scss'
import Image from 'next/image'

const DropdownLinks = ({ label, links }) => {
  return (
    <div className={style.dropdown}>
      <p className={style.link}>{label}</p>
      <ul className={style.dropdownList}>
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

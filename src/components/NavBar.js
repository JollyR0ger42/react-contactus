import style from './navBar.module.scss'
import Image from 'next/image'

const Element = ({ label, link, links }) => {
  return <a className={style.link} href={link}>{label}</a>
}

export default function NavBar({ navElements }) {
  return (
    <nav className={style.navbar}>
      <Image
        className={style.logo}
        src="/logo.svg"
        width={121}
        height={29}
        alt="Logo"
      />
      <div className={style.navLinks}>
        <div className={style.elements}>
          {navElements?.map(el => <Element {...el} />)}
        </div>
        <div className={style.userNav}>
          <a className={style.icon} href="/profile">
            <Image
              src="/static/profile.svg"
              width={32}
              height={32}
              alt="Profile"
            />
          </a>
          <a className={style.icon} href="/cart">
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

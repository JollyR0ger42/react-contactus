import style from './navbar.module.css'
import Image from 'next/image'

const Element = ({ label, link, links }) => {
  return <a className={style.link} href={link}>{label}</a>
}

export default function NavBar({ navElements }) {
  return (
    <nav className={style.navbar}>
      <Image
        src="/logo.svg"
        width={121}
        height={29}
        alt="Logo"
      />
      <div className={style.navLinks}>
        <div className={style.elements}>
          {navElements?.map(el => <Element {...el} />)}
        </div>
        <div>
          <a className={style.link} href="/profile">
            <Image
              src="/static/profile.svg"
              width={32}
              height={32}
              alt="Profile"
            />
          </a>
          <a className={style.link} href="/cart">
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

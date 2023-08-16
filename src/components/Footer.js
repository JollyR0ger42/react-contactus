import style from './footer.module.scss'
import Image from 'next/image'
import BlockContacts from './BlockContacts'

export default function Footer({ contacts, groups, joinForm }) {
  return (
    <nav className={style.footer}>
      <div className={style.footerLogo}>
        <Image
          src="/logo.svg"
          width={181}
          height={44}
          alt="Logo"
        />
      </div>
      <div className={style.footerContent}>
        <div>
          <h4 className={style.footerSubtitle}>{contacts.title}</h4>
          <div style={{ height: '144px' }}>
            <BlockContacts contacts={contacts.list} />
          </div>
        </div>
      </div>
    </nav>
  )
}

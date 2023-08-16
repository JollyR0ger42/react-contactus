import style from './footer.module.scss'
import Image from 'next/image'
import BlockContacts from './BlockContacts'

const Group = ({title, links}) => {
  return (
    <div className={style.footerContentGroup}>
      <h4 className={style.footerSubtitle}>{title}</h4>
      {links.map((link, idx) => <a key={idx} className={style.footerLink} href={link.url}>{link.label}</a>)}
    </div>
  )
}

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
        {groups.map((group, idx) => <Group key={idx} {...group}/>)}
      </div>
    </nav>
  )
}

import style from './blockContacts.module.scss'
import Image from 'next/image'

const Contact = ({ icon, text }) => {
  return (
    <div className={style.contact}>
      <Image
        className={style.contactIcon}
        src={`/static/${icon}.svg`}
        width={20}
        height={20}
        alt={icon}
      />
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  )
}

const BlockContacts = ({contacts, className}) => {
  return (
    <div className={`${style.contacts} ${className}`}>
      {contacts.map((contact, idx) => <Contact key={idx} {...contact} />)}
    </div>
  )
}

export default BlockContacts

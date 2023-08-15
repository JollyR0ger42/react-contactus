import style from './contactCard.module.scss'
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
      <p>{text}</p>
    </div>
  )
}

const Social = ({ icon, link }) => {
  return (
    <a href={link} target="_blank" className={style.social}>
      <Image
        className={style.socailIcon}
        src={`/static/${icon}.svg`}
        width={15}
        height={15}
        alt={icon}
      />
    </a>
  )
}

const CardInfo = ({ data }) => {
  return (
    <div className={style.cardInfo}>
      <div className={style.infoBgWrapper}>
        <Image
          className={style.infoBg}
          src="/static/infoBg.svg"
          width={208}
          height={209}
          alt=""
        />
      </div>
      <div className={style.cardInfoContent}>
        <h2 className={style.infoTitle}>{data.title}</h2>
        <p className={style.infoParag}>{data.parag}</p>
        <div className={style.contacts}>
          {data.contacts.map(contact => <Contact {...contact} />)}
        </div>
        <div className={style.socials}>
          {data.socials.map(social => <Social {...social} />)}
        </div>
      </div>
    </div>
  )
}

const CardForm = () => {
  return <form>
    Card Form
  </form>
}

export default function ContactCard({ card }) {
  return (
    <div className={style.card}>
      <CardInfo data={card.info} />
      <CardForm />
    </div>
  )
}

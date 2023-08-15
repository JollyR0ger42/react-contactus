import style from './contactCard.module.scss'
import Image from 'next/image'

const CardInfo = () => {
  return (
    <div className={style.cardInfo}>
      {false && <div className={style.infoBgWrapper}>
        <Image
          className={style.infoBg}
          src="/static/infoBg.svg"
          width={208}
          height={209}
          alt=""
        />
      </div>}
      <div className={style.cardInfoContent}>
        <h2 className={style.infoTitle}>Contact Information</h2>
        <p className={style.infoParag}>Say something to start a live chat!</p>
        <div className={style.contacts}>
          <div className={style.contact}>
            +1012 3456 789
          </div>
          <div className={style.contact}>
            demo@gmail.com
          </div>
          <div className={style.contact}>
            132 Dartmouth Street Boston, Massachusetts 02156 United States
          </div>
        </div>
        <div className={style.infoLinks}>
          <p>twitor</p>
          <p>insta</p>
          <p>diss</p>
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

export default function ContactCard() {
  return (
    <div className={style.card}>
      <CardInfo />
      <CardForm />
    </div>
  )
}

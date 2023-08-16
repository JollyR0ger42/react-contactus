"use client";
import style from './contactCard.module.scss'
import CardForm from './CardForm'
import CardInfo from './CardInfo'
import Image from 'next/image'

// ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$

export default function ContactCard({ card }) {
  return (
    <div className={style.card}>
      <CardInfo data={card.info} />
      <div className={style.cardFormWrapper}>
        <CardForm data={card.form} />
        <div className={style.cardFormWrapperBg}>
          <Image
            className={style.cardFormWrapperBgImage}
            src="/static/formBgImg.png"
            width={260}
            height={220}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

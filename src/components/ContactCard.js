"use client";
import style from './contactCard.module.scss'
import CardForm from './CardForm'
import ContactCardInfo from './ContactCardInfo'

// ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$

export default function ContactCard({ card }) {
  return (
    <div className={style.card}>
      <ContactCardInfo data={card.info} />
      <div className={style.cardFormWrapper}>
        <CardForm  data={card.form} />
      </div>
    </div>
  )
}

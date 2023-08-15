"use client";
import style from './contactCard.module.scss'
import { InputField, SelectField, Submit } from './FormFields'
import ContactCardInfo from './ContactCardInfo'
import { useForm } from 'react-hook-form'

// ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$

const CardForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.userContacts}>
        <InputField register={register('firstName')} />
        <InputField register={register('lastName')} />
        <InputField register={register('email')} />
        <InputField register={register('phone')} />
      </div>
      <SelectField register={register('subject')} />
      <InputField register={register('message')} />
      <Submit />
    </form>
  )
}

export default function ContactCard({ card }) {
  return (
    <div className={style.card}>
      <ContactCardInfo data={card.info} />
      <div className={style.cardForm}>
        <CardForm />
      </div>
    </div>
  )
}

"use client";
import style from './contactCard.module.scss'
import { InputField, SelectField, Submit } from './FormFields'
import ContactCardInfo from './ContactCardInfo'
import { useForm } from 'react-hook-form'

// ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$

const CardForm = ({ data }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.userContacts}>
        <InputField label={data.firstName} register={register('firstName')} />
        <InputField label={data.lastName} register={register('lastName')} />
        <InputField label={data.email} register={register('email')} />
        <InputField label={data.phone} register={register('phone')} />
      </div>
      <SelectField label={data.subject.label} register={register('subject')} />
      <InputField label={data.message.label} register={register('message')} />
      <Submit />
    </form>
  )
}

export default function ContactCard({ card }) {
  return (
    <div className={style.card}>
      <ContactCardInfo data={card.info} />
      <div className={style.cardForm}>
        <CardForm  data={card.form} />
      </div>
    </div>
  )
}

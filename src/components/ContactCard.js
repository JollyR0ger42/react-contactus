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
    <form  className={style.cardForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.cardFormContacts}>
        <InputField label={data.firstName} register={register('firstName')} />
        <InputField label={data.lastName} register={register('lastName')} />
        <InputField label={data.email} register={register('email')} />
        <InputField label={data.phone} register={register('phone')} />
      </div>
      <SelectField
        className={style.cardFormSubject}
        values={['subj1', 'subj2', 'subj3', 'subj4']}
        data={data.subject}
        register={register('subject')}
      />
      <InputField
        className={style.cardFormMessage}
        label={data.message.label}
        register={register('message')}
        placeholder={data.message.placeholder}
      />
      <Submit />
    </form>
  )
}

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

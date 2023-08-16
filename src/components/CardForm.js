import style from './cardForm.module.scss'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

const InputField = ({ register, label, className, placeholder }) => {
  return (
    <div className={`${style.inputField} ${className}`}>
      <input className={style.inputFieldInput} id={register.name} {...register} placeholder={placeholder} />
      <label className={style.inputFieldLabel} htmlFor={register.name}>{label}</label>
    </div>
  )
}

const RadioInput = ({ register, value, label }) => {
  return (
    <div>
      <label className={style.radioInputLabel} htmlFor={value}>
        <div className={style.radioInputWrapper}>
          <input className={style.radioInputInput} id={value} {...register} type="radio" value={value} />
          <Image
            className={style.radioInputCheck}
            src={`/static/check.svg`}
            width={13}
            height={13}
            alt=""
          />
        </div>
        <p className={style.radioInputText}>{label}</p>
      </label>
    </div>
  )
}

const SelectField = ({ register, data, values, className }) => {
  return (
    <div className={className}>
      <h5 className={style.selectFieldTitle}>{data.title}</h5>
      <div className={style.selectFieldOptions}>
        {values.map((value, idx) =>
          <RadioInput key={value} register={register} value={value} label={data.labels[idx]} />
        )}
      </div>
    </div>
  )
}

const Submit = ({label}) => {
  return (
    <input className={style.submit} type="submit" value={label} />
  )
}

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
      <Submit label={data.submitLabel} />
    </form>
  )
}

export default CardForm
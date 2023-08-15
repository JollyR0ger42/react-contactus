import style from './formField.module.scss'
import Image from 'next/image'

export const InputField = ({ register, label, className, placeholder }) => {
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

export const SelectField = ({ register, data, values, className }) => {
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

export const Submit = () => {
  return (
    <input type="submit" />
  )
}
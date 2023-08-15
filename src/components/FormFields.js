import style from './formField.module.scss'

export const InputField = ({ register, label }) => {
  return (
    <div className={style.inputField}>
      <input className={style.inputFieldInput} id={register.name} {...register} />
      <label className={style.inputFieldLabel} htmlFor={register.name}>{label}</label>
    </div>
  )
}

export const SelectField = ({ register }) => {
  return (
    <div>
      <div>
        <input id={register.name + '1'} {...register} type="radio" value="value1" />
        <label htmlFor={register.name + '1'}>Label</label>
      </div>
      <div>
        <input id={register.name + '2'} {...register} type="radio" value="value2" />
        <label htmlFor={register.name + '2'}>Label</label>
      </div>
      <div>
        <input id={register.name + '3'} {...register} type="radio" value="value3" />
        <label htmlFor={register.name + '3'}>Label</label>
      </div>
    </div>
  )
}

export const Submit = () => {
  return (
    <input type="submit" />
  )
}
import style from './formField.module.scss'

export const InputField = ({ register, label }) => {
  return (
    <div className={style.inputField}>
      <input className={style.inputFieldInput} id={register.name} {...register} />
      <label className={style.inputFieldLabel} htmlFor={register.name}>{label}</label>
    </div>
  )
}

const RadioInput = ({register, value, label}) => {
  return (
    <div>
      <input id={value} {...register} type="radio" value={value} />
      <label htmlFor={value}>{label}</label>
    </div>
  )
}

export const SelectField = ({ register, data, values }) => {
  return (
    <div>
      <h5>{data.title}</h5>
      <div>
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
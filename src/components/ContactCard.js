import style from './contactCard.module.scss'
import { InputField, SelectField, Button } from './FormFields'
import ContactCardInfo from './ContactCardInfo'

const CardForm = () => {
  return (
    <form>
      <div>
        <InputField />
        <InputField />
        <InputField />
        <InputField />
      </div>
      <SelectField />
      <InputField />
      <Button />
    </form>
  )
}

export default function ContactCard({ card }) {
  return (
    <div className={style.card}>
      <ContactCardInfo data={card.info} />
      <CardForm />
    </div>
  )
}

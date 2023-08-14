import ContactCard from '../components/ContactCard'
import style from './page.module.scss'

export default function ContactUsPage() {
  return (
    <div className={style.contactPage}>
      <h1 className={style.title}>Contact Us</h1>
      <p className={style.parag}>Any question or remarks? Just write us a message!</p>
      <ContactCard />
    </div>
  )
}

import ContactCard from '../components/ContactCard'
import style from './page.module.scss'

import { getContactPageData } from '@/dataMock'

async function getData() {
  const res = await getContactPageData()
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function ContactUsPage() {
  const data = (await getData()).page

  return (
    <div className={style.contactPage}>
      <h1 className={style.title}>{data.title}</h1>
      <p className={style.parag}>{data.parag}</p>
      <ContactCard card={data.card}/>
    </div>
  )
}

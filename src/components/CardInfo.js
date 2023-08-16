import style from './cardInfo.module.scss'
import Image from 'next/image'
import BlockContacts from './BlockContacts'

const Social = ({ icon, link }) => {
  return (
    <a href={link} target="_blank" className={style.social}>
      <Image
        className={style.socailIcon}
        src={`/static/${icon}.svg`}
        width={15}
        height={15}
        alt={icon}
      />
    </a>
  )
}

const CardInfo = ({ data }) => {
  return (
    <div className={style.cardInfo}>
      <div className={style.cardInfoBgWrapper}>
        <Image
          className={style.cardInfoBg}
          src="/static/infoBg.svg"
          width={208}
          height={209}
          alt=""
        />
      </div>
      <div className={style.cardInfoContent}>
        <h2 className={style.cardInfoTitle}>{data.title}</h2>
        <p className={style.cardInfoParag}>{data.parag}</p>
        <div style={{height: '200px'}}>
          <BlockContacts className={style.cardInfoContacts} contacts={data.contacts} />
        </div>
        <div className={style.socials}>
          {data.socials.map((social, idx) => <Social key={idx} {...social} />)}
        </div>
      </div>
    </div>
  )
}

export default CardInfo
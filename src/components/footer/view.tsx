import styles from './footer.module.css'
import instagramIcon from './icons/instagram.svg'
import * as SlIcons from 'react-icons/sl'
import * as TbIcons from 'react-icons/tb'

export const Footer = () => {
  return (
    <div className={styles['container']}>
      <ul className={styles['easy-access']}>
        <li>Easy access</li>
        <li>FAQ</li>
        <li>Terms of service</li>
        <li>Privacy policy</li>
        <li>
          <TbIcons.TbBrandTelegram />
          <img src={instagramIcon} alt="instagram-icon" />
          <SlIcons.SlSocialTwitter />
        </li>
      </ul>
      <ul className={styles['chains-list']}>
        <li>London</li>
        <li>Paris</li>
        <li>Dubai</li>
        <li>Ottawa</li>
      </ul>
    </div>
  )
}

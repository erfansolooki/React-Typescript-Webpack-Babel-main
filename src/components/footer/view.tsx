import styles from './footer.module.css'
import * as SlIcons from 'react-icons/sl'
import * as TbIcons from 'react-icons/tb'

export const Footer = () => {
  return (
    <div className={styles['container']}>
      <ul className={styles['easy-access']}>
        <li className={styles['list-title']}>Easy access</li>
        <li>FAQ</li>
        <li>Terms of service</li>
        <li>Privacy policy</li>
        <li className={styles['social']}>
          <TbIcons.TbBrandTelegram size={17} />
          <SlIcons.SlSocialInstagram size={16} />
          <SlIcons.SlSocialTwitter size={16} />
        </li>
      </ul>
      <ul className={styles['chains-list']}>
        <li className={styles['list-title']}>Chains list</li>
        <li>Paris</li>
        <li>Dubai</li>
        <li>Ottawa</li>
      </ul>
      <form action="" className={styles['form']}>
        <div>
          <p className={styles['form-title']}>Message To Us</p>
          <input placeholder="Name" />
          <input placeholder="Phone number" />
          <input placeholder="Email" />
        </div>
        <div>
          <textarea name="" id=""></textarea>
          <button>Send</button>
        </div>
      </form>
    </div>
  )
}

import { Drawer } from '../drawer/view'
import styles from './header.module.css'
import userIcon from './icons/user.svg'
import shoppingCartIcon from './icons/shopping-cart.svg'
import logo from './icons/Logo.svg'

export const Header = () => {
  return (
    <div className={styles['container']}>
      <div>
        <Drawer />
      </div>
      <div className={styles['logo']}>
        <img src={logo} alt="logo" />
        <div className={styles['title']}>
          <div>Chain Restaurant</div>
          <div>Kale Me Crazy</div>
        </div>
      </div>
      <div className={styles['items']}>
        <img src={shoppingCartIcon} alt="shopping-cart" />
        <img src={userIcon} alt="profile" />
      </div>
    </div>
  )
}

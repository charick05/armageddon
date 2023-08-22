import CartBlock from "../components/cartblock/CartBlock"
import Earth from "../components/earth/Earth";
import Logo from "../components/logo/Logo";
import styles from './page.module.css';

export default function CartPage() {

   return (
      <div className={styles.page}>
         <Logo />
         <Earth />
         <CartBlock />
      </div>
   )
}
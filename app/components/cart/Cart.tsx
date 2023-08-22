import Link from 'next/link';
import { useMyAppContext } from '@/app/context/myContext';
import styles from './cart.module.css';

export default function Cart() {
  const {astItem} = useMyAppContext();

  let asteroidCount = "астероидов";
    switch(astItem.length) {
      case 1:
        asteroidCount = 'астероид'
        break;
      case 2:
      case 3:
      case 4:
        asteroidCount = 'астероида'
        break;
      default:
        asteroidCount = 'астероидов'
        break;
    }

  return (
   <div className={styles.cart}>
      <div className={styles.basket}>
        <span>Корзина</span>
        <span>{astItem.length} {asteroidCount}</span>
      </div>
      <Link
        className={styles.btn}
        href={'/cartpage'}
      >
        отправить
      </Link>
   </div>
  )
}

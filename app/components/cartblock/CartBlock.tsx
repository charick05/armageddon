'use client';
import Link from 'next/link';
import styles from './cartBlock.module.css';

import CartList from "./CartList";
import { useMyAppContext } from "@/app/context/myContext";

export default function CartBlock() {
   const {astItem, setAstItem} = useMyAppContext();
  return (
    <div className={styles.cartblock}>
      <div className={styles.order_title_block}>
        <h1 className={styles.order_title}>	&#127775; Заказ отправлен! 	&#127775;</h1>
      </div>
      {astItem.map(asteroid =>
         <CartList
            key={asteroid.asteroidId}
            asteroid={{...asteroid}}
            />)}

      <div className={styles.main_page_block}>
        <Link
            className={styles.main_page}
            href="/"
            onClick={() => setAstItem([])}
          >
            Вернуться на главную
        </Link>
      </div>
    </div>
  )
}

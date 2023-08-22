'use client';

import Link from 'next/link';
import IsDangerousItem from '../isdangerous/IsDangerousItem';
import Arrow from '../asteroidList/Arrow';
import styles from './cartBlock.module.css';

interface Props {
  asteroid: Asteroids
}

export default function CartList({asteroid}: Props) {

  const {asteroidId, dateMaxArrival, diameterMin, isDangerous, missDistanceLn, name} = asteroid;
  const diameter = diameterMin.toFixed(0);

  const distanceLnNumber = Number(missDistanceLn).toFixed(0);
  const distanceLn = new Intl.NumberFormat('ru-RU').format(+distanceLnNumber);

  const allMounth = ["янв", "февр", "март", "апр", "май", "июнь", "июль", "авг", "сент", "окт", "нояб", "дек"];
  const mounthIndex = +dateMaxArrival.slice(6, 7)
  const date = {
   mounth: allMounth[mounthIndex - 1],
   year: dateMaxArrival.slice(0, 4),
   day: dateMaxArrival.slice(8)
  }
  const {mounth, year, day} = date;

  return (
    <div className={styles.cartlist}>
      <h2 className={styles.title}>{`${day} ${mounth} ${year}`}</h2>
      <div className={styles.block}>

        <div className={styles.left}>
          <span className={styles.distance}>
            {distanceLn} лунных орбит
            <span className={styles.arrow}>
              <Arrow />
            </span>
          </span>
        </div>

        <div className={styles.right}>
          <span
            className={styles.icon}
            style={{
              width: +diameter > 100 ? "36px" : "22px",
              left: +diameter > 100 ? "-26px" : "-15px"
            }}
          >
            <img src="./asteroid_icon.png" alt="" />
          </span>

          <Link href={`/${asteroidId}`}>
            <span className={styles.name}>
              {name}
            </span>
          </Link>

          <span className={styles.diameter}>Ø {diameter} m</span>
        </div>
        <span className={styles.dangerous}>
          {isDangerous && <IsDangerousItem />}
        </span>
      </div>
    </div>
  )
}

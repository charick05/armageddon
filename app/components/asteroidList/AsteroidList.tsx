'use client';
import Link from "next/link";
import { useState } from "react";
import { useMyAppContext } from "@/app/context/myContext";
import IsDangerousItem from "../isdangerous/IsDangerousItem";
import Arrow from "./Arrow";
import styles from './asteroidList.module.css';

interface Props {
   asteroid: Asteroids;
   distanceSelect: string;
}

export default function AsteroidList({
      asteroid,
      distanceSelect,
}: Props) {

  const {astItem, setAstItem} = useMyAppContext();

   const {
      dateMaxArrival,
      missDistanceKm,
      missDistanceLn,
      asteroidId,
      name,
      isDangerous,
      diameterMin
    } = asteroid;

   const isAsteroidInCart = astItem.some(item => item.asteroidId === asteroidId)
   const [checked, setChecked] = useState<boolean>(isAsteroidInCart);

   const toggleCart = () => {
      const itemInCart = astItem.find(item => item.asteroidId === asteroidId);
      if(!itemInCart) {
        setAstItem([...astItem, asteroid]);
        setChecked(true);
      } else {
        const newCartItem = astItem.filter(item => item.asteroidId !== asteroidId);
        setAstItem([...newCartItem]);
        setChecked(false);
      }
   }

   const allMounth = ["янв", "февр", "март", "апр", "май", "июнь", "июль", "авг", "сент", "окт", "нояб", "дек"];
   const mounthIndex = +dateMaxArrival.slice(6, 7)
   const date = {
    mounth: allMounth[mounthIndex - 1],
    year: dateMaxArrival.slice(0, 4),
    day: dateMaxArrival.slice(8)
   }
   const {mounth, year, day} = date;
   
   const distanceKmNumber = Number(missDistanceKm).toFixed(0)
   const distanceLnNumber = Number(missDistanceLn).toFixed(0)
   const distanceKm = new Intl.NumberFormat('ru-RU').format(+distanceKmNumber);
   const distanceLn = new Intl.NumberFormat('ru-RU').format(+distanceLnNumber);
   const diameter = diameterMin.toFixed(0);

   return(
            <div className={styles.asteroid_list}>
              <h2 className={styles.dateArrival}>{`${day} ${mounth} ${year}`}</h2>
              <div className={styles.astInfo}>
                <div className={styles.astInfo_left}>
                  <span className={styles.asteroid_distance}>
                     {
                       distanceSelect === 'km' 
                       ?  `${distanceKm} км`
                       : `${distanceLn} лунных орбит`
                     }
                     <span className={styles.arrow}>
                        <Arrow />
                     </span>
                  </span>
                  <button
                    className={styles.btn}
                    onClick={() => toggleCart()}
                    style={{backgroundColor: checked ? "rgba(248, 102, 0, 0.15)" : "#F86600"}}
                  >
                     {checked ? "В корзине" : "Заказать"}
                  </button>
                </div>

                <div className={styles.astInfo_right}>
                  <span
                    className={styles.asteroid_icon}
                    style={{
                      width: +diameter > 100 ? "36px" : "22px",
                      left: +diameter > 100 ? "-23px" : "-15px"
                    }}
                  >
                    <img src="./asteroid_icon.png" alt="" />
                  </span>
                  <Link href={`/${asteroidId}`}>
                    <span className={styles.astName}>
                      {name}
                    </span>
                  </Link>
                  <span className={styles.diameter}>Ø {diameter} m</span>
                  {isDangerous && <IsDangerousItem />}
                </div>
              </div>
            </div>
   )
};
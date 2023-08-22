'use client';
import { useState } from "react";
import { useMyAppContext } from "@/app/context/myContext";
import AsteroidList from "../asteroidList/AsteroidList";
import DistanceSelect from "../distance/DistanceSelect";
import Cart from "../cart/Cart";
import styles from './asteroidsBlock.module.css';

interface Props {
   fetchAsteroids: Asteroids[];
}


export default function AsteroidsBlock(props: Props) {
   
   const {astItem, distanceSelect} = useMyAppContext();
   const [dangersChecked, setDangersChecked] = useState<boolean>(false);

   const dangerousAsteroids = props.fetchAsteroids.filter(ast => ast.isDangerous === true);
   const allAsteroids = props.fetchAsteroids.map(ast => ast);

   return(
      <div className={styles.asteroidblock}>
         {astItem.length > 0 && <Cart />}
         <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
      <div className={styles.distance}>
         <DistanceSelect />
        <div className={styles.changeBlock}>
         <div>
            <button
               className={styles.btnChange}
               style={{color: dangersChecked ? "white" : "black"}}
               onClick={() => setDangersChecked(!dangersChecked)}
               >
               &#128504;
            </button>
            <span>Показать только опасные</span>
         </div>
        </div>
      </div>
         {
            (dangersChecked ? dangerousAsteroids : allAsteroids).map((ast =>  
               <AsteroidList
                  key={ast.asteroidId}
                  asteroid={{...ast}}
                  distanceSelect={distanceSelect}
               />)
            )
         }
      </div>
   )
};
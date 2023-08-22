import getAsteroid from "../actions/getAsteroid";
import styles from './page.module.css';

interface Params {
   params: {
      asteroidId: string;
   }
}

export default async function Asteroid({params: {asteroidId}}: Params) {
   const asteroid = await getAsteroid(asteroidId);
   const {
      name,
      designation,
      absoluteMagnitude,
      closeApproachData,
      diameter,
      isDangerous,
      orbitalData
   } = asteroid;

   return (
         <main className={styles.main}>
            <h1 className={styles.main_title}>Данные об астероиде</h1>

            <section className={styles.info}>
               <h1 className={styles.title}>Основные данные</h1>
               <span>Название астероида: {name}</span>
               <span>Магнитиуда: {absoluteMagnitude.toFixed(0)}</span>
               <span>Обозначение: {designation}</span>
               <span>Опасен? - {isDangerous ? "Да" : "Нет"}</span>
            </section>

            <section className={styles.diameter}>
               <h1 className={styles.title}>Диаметр</h1>
               <span>Минимальный диаметр: {diameter.meters.estimated_diameter_min.toFixed(0)} метров</span>
               <span>Максимальный диаметр: {diameter.meters.estimated_diameter_max.toFixed(0)} метров</span>
            </section>

            <h1 className={styles.main_title}>Орбитальные данные</h1>
            <section className={styles.orbital_data}>
               <span>Дата определения орбиты: {orbitalData.orbit_determination_date}</span>
               <span>Дата первого наблюдения: {orbitalData.first_observation_date}</span>
               <span>Дата последнего наблюдения: {orbitalData.last_observation_date}</span>
               <span>Наблюдений произведено: {orbitalData.observations_used} раз</span>
               <span>Тип орбитального класса: {orbitalData.orbit_class.orbit_class_type}</span>
            </section>

            <h1 className={styles.main_title}>Список всех сближений</h1>

            {closeApproachData.map(data => 
                  <section key={data.close_approach_date_full}>
                     <span>Дата сближения: {data.close_approach_date}</span>
                     <span>Скорость: {Number(data.relative_velocity.kilometers_per_second).toFixed(0)} км/сек</span>
                     <span>Расстояние в киллометрах: {Number(data.miss_distance.kilometers).toFixed(0)} км</span>
                     <span>Расстояние в лунных орбитах: {Number(data.miss_distance.lunar).toFixed(0)} лунные орбиты</span>
                     <span>Орбита: {data.orbiting_body}</span>
                  </section>
               )}
         </main>
   )
};

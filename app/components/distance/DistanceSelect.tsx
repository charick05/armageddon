import { useMyAppContext } from "@/app/context/myContext";
import styles from './distanceSelect.module.css';

export default function DistanceSelect() {

  const {distanceSelect, setDistanceSelect} = useMyAppContext();

  return (
      <>
          <span
            className={styles.distance_select}
            style={
               {fontWeight: distanceSelect === "ln"
               ? 300
               : 700,
               textDecoration: distanceSelect === "ln"
               ? "underline"
               : "none"}
            }
            onClick={() => setDistanceSelect('km')}
            >
                в киллометрах 
            </span> | 
            <span
                className={styles.distance_select}
                style={
                  {fontWeight: distanceSelect === "km"
                  ? 300
                  : 700,
                  textDecoration: distanceSelect === "km"
                  ? "underline"
                  : "none",
                  paddingLeft: "5px"}
                }
                onClick={() => setDistanceSelect('ln')}
            >
                в лунных орбитах
            </span>
      </>
  )
}


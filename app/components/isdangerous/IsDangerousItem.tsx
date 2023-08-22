import {IoIosWarning} from 'react-icons/io';
import styles from './isdangerous.module.css';

const IsDangerousItem: React.FC = () => {
  return (
    <span className={styles.isdangerousBlock}>
      <IoIosWarning className={styles.isdangerousIcon} />
      <span className={styles.isdangerous}>Опасен</span>
    </span>
  )
}
export default IsDangerousItem;

import styles from './../styles/StartBar.module.css';
import AppIcon from './AppIcon';
import windows from './img/windows.png'
const StartBar = () => {
  return (
    <div className={styles.startBar}>
    <div className={styles.weather}></div>
      <div className={styles.iconRow}>
        <AppIcon image={windows}/>
        <AppIcon />
        <AppIcon />
        <AppIcon />
      </div>
      <div className={styles.widgets}></div>
    </div>
  );
};

export default StartBar;

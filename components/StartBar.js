import styles from './../styles/StartBar.module.css';
import AppIcon from './AppIcon';
import windows from './img/windows.png';
import SearchBar from './SearchBar';
const StartBar = ({setShowStart}) => {
  return (
    <div className={styles.startBar}>
      <div className={styles.weather}></div>
      <div className={styles.iconRow}>
        <AppIcon whenClicked={setShowStart} image={windows} />
        <SearchBar />
        <AppIcon />
        <AppIcon />
        <AppIcon />
      </div>
      <div className={styles.widgets}></div>
    </div>
  );
};

export default StartBar;

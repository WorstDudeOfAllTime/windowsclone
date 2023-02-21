import styles from './../styles/Start.module.css'
const Start = ({showStart}) => {


  return(
    <div className={styles.startBox}>
      <div className={styles.appDisplay}></div>
      <div className={styles.profAndPower}></div>
    </div>
  )
}

export default Start;
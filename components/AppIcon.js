import styles from './../styles/AppIcon.module.css';
import Image from 'next/image';
const AppIcon = ({ image }) => {
  return (
    <div className={styles.iconFrame}>
      <Image src={image} height={25} width={25}/>
    </div>
  );
};

export default AppIcon;

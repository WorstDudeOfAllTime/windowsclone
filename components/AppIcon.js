import styles from './../styles/AppIcon.module.css';
import Image from 'next/image';
const AppIcon = ({ image, whenClicked }) => {
  return (
    <div
      className={styles.iconFrame}
      onClick={() => {
        whenClicked(true);
      }}
    >
      <Image src={image} height={25} width={25} />
    </div>
  );
};

export default AppIcon;

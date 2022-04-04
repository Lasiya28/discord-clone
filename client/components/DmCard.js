import styles from "../styles/dmCard.module.css";
import Image from "next/image";

const DmCard = ({ name, status, avatar, id }) => {
  const changeUrl = () => {};
  return (
    <div className={styles.DmCard} onClick={changeUrl}>
      <div className={styles.dmAvatarContainer}>
        <Image
          height={48}
          width={48}
          src={avatar}
          className={styles.dmAvatar}
          alt={name}
        />
        <div className={styles.dmCardStatus} id={status} />
      </div>
      <p className={styles.dmCardName}>{name}</p>
    </div>
  );
};

export default DmCard;

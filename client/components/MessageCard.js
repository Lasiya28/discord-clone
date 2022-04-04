import Image from "next/image";
import styles from "../styles/MessageCard.module.css";

const MessageCard = () => {
  return (
    <div className={styles.MessageCard}>
      <div className={styles.messageAvatarContainer}>
        <Image
          className={styles.messageAvatar}
          height={40}
          width={40}
          src={avatar}
          alt={sender}
        />
      </div>
      <div>
        <div className={style.MessageDetails}>
          <p className={styles.sender}>{sender}</p>
          <small className={styles.timestamp}>{timestamp}</small>
        </div>
        <p className={styles.messageText}>{content}</p>
      </div>
    </div>
  );
};

export default MessageCard;

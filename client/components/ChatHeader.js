import Image from "next/image";
import personPlus from "../assets/icons/person-plus.svg";
import video from "../assets/icons/video.svg";
import inbox from "../assets/icons/inbox.svg";
import phone from "../assets/icons/phone.svg";
import help from "../assets/icons/help.svg";
import pin from "../assets/icons/pin.svg";
import at from "../assets/icons/at.svg";
import styles from "../styles/chatHeader.module.css";
import ethLogo from "../assets/eth.png";
import { useContext } from "react";
import { DiscordContext } from "../context/context";

const currentAccount = "0xb12aA04d3A891b05D85aE984DC6503AC950D5c91";

const ChatHeader = () => {
  const { roomName, currentAccount, connectWallet } =
    useContext(DiscordContext);
  return (
    <div className={styles.chatHeader}>
      <div className={styles.roomNameContainer}>
        <Image className={styles.svg} src={at} height={20} width={20} alt="" />
        <h3 className={styles.title}>{roomName}</h3>
        <div className={styles.chatHeaderStatus} id="online" />
        {currentAccount ? (
          <div className={styles.connectedWallet}>
            <Image src={ethLogo} height={20} width={20} alt="ethLogo" />
            <span className={styles.separator}>{"|"}</span>
            {currentAccount.slice(0, 5)}...{currentAccount.slice(38)}
          </div>
        ) : (
          <div className={styles.connectWallet} onClick={() => connectWallet()}>
            Connect Wallet
          </div>
        )}
        <div className={styles.headerIconsContainer}>
          <div className={styles.headerItem}>
            <Image
              height={25}
              width={25}
              src={phone}
              className={styles.svg}
              alt=""
            />
          </div>
          <div className={styles.headerItem}>
            <Image
              height={25}
              width={25}
              src={video}
              className={styles.svg}
              alt=""
            />
          </div>
        </div>
        <div className={styles.headerItem}>
          <Image
            className={styles.svg}
            height={25}
            width={25}
            src={pin}
            alt=""
          />
        </div>
        <div className={styles.headerItem}>
          <Image
            height={25}
            width={25}
            src={personPlus}
            className={styles.svg}
            alt=""
          />
        </div>
        <div className={styles.headerItem}>
          <input type="search" placeholder="Search" />
        </div>
        <div className={styles.headerItem}>
          <Image
            height={25}
            width={25}
            src={inbox}
            className={styles.svg}
            alt=""
          />
        </div>
        <div className={styles.headerItem}>
          <Image
            height={25}
            width={25}
            src={help}
            className={styles.svg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;

import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/roomAvatar.module.css";

// id, avatar, name is being created to be destructured in RoomAvatar component in sidebar.js
const RoomAvatar = ({ id, avatar, name }) => {
  const router = useRouter();

  // console.log("name", name, avatar, id);
  // console.log("router", router);
  const changeUrl = () => {
    router.push(`?channel=${id}&name=${name}`); //when clicked, we will be directed to the user with the id and name of the channel.
  };

  return (
    <div className={styles.wrapper} onClick={changeUrl}>
      <div className={styles.RoomAvatar}>
        <Image
          src={avatar}
          className={styles.roomAvatarImage}
          height={48}
          width={48}
          alt={name}
        />
      </div>
    </div>
  );
};

export default RoomAvatar;

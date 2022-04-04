// this is the component we see where we are going to type out messages to our friends.
import React from "react";
import { useContext } from "react";
import { DiscordContext } from "../context/context";
import styles from "../styles/MessageForm.module.css";
import plusFilled from "../assets/icons/plus-filled.svg";
import sticker from "../assets/icons/sticker.svg";
import smiley from "../assets/icons/smiley.svg";
import gift from "../assets/icons/gift.svg";
import gif from "../assets/icons/gif.svg";
import Image from "next/image";

//extracting these variables from DiscordContext
const MessageForm = () => {
  const {
    messageText,
    setMessageText,
    placeholder,
    gun,
    roomName,
    currentAccount,
    currentUser,
  } = useContext(DiscordContext);

  //Function sends message every time "enter" key is hit
  const sendMessage = (event) => {
    event.preventDefault();
    //if the messageText is empty it will return nothing
    if (messageText.trim() === "") return;

    const messagesRef = gun.get(roomName); //gets a reference to the room name(conversation which wsa clicked) using gun js
    console.log("messagesRef", messagesRef);

    const newMessage = {
      sender: currentUser.name,
      avatar: currentUser.avatar
        ? currentUser.avatar
        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU",
      content: messageText.trim(), //.trim to trim the whitespaces at the beginning and end of the message to clean it up.
      createdAt: Date().substring(4, 11), //just to keep track of message info
      messageId: Date.now(),
    };
    messagesRef.set(newMessage);
    setMessageText("");
  };

  return (
    // To send the message on form event so that the page doesn't reset state every time
    <form
      onSubmit={(event) => sendMessage(event)} //event coming from preventDefault
      className={styles.chatInputContainer}
    >
      <div className={styles.chatInputWrapper}>
        <div className={styles.svgContainer}>
          <Image
            height={25}
            width={25}
            src={plusFilled}
            className={styles.svg}
          />
        </div>
        <input
          type="text"
          className={styles.chatInput}
          value={messageText}
          disabled={currentAccount.name}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder={placeholder}
        />
        <div>
          <Image height={25} width={25} src={gift} className={styles.svg} />
        </div>
        <div>
          <Image height={25} width={25} src={gif} className={styles.svg} />
        </div>
        <div>
          <Image height={25} width={25} src={sticker} className={styles.svg} />
        </div>
        <div>
          <Image height={25} width={25} src={smiley} className={styles.svg} />
        </div>
      </div>
    </form>
  );
};

export default MessageForm;

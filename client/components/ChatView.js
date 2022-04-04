import ChatHeader from "./chatHeader";
import styles from "./chatHeader";
import { useContext } from "react";
import { DiscordContext } from "../context/context";
import MessageCard from "./MessageCard";
import MessageForm from "./MessageForm";

const ChatView = () => {
  const { state } = useContext(DiscordContext);

  const formattedMessagesArray = () => {
    //filter out and select messages that are selected.
    const uniqueArray = state.messages.filter((value, index) => {
      const _value = JSON.stringify(value);

      return (
        index ===
        state.messages.findIndex((obj) => {
          return JSON.stringify(obj) === _value;
        })
      );
    });
    return uniqueArray;
  };

  return (
    <div className={styles.ChatView}>
      <ChatHeader />
      <div className={styles.messagesContainer}>
        {formattedMessagesArray().map((message, index) => {
          // These props for each message card
          <MessageCard
            key={index}
            avatar={message.avatar}
            sender={message.sender}
            timestamp={message.createdAt}
            content={message.content}
          />;
        })}
      </div>
      <MessageForm />
    </div>
  );
};

export default ChatView;

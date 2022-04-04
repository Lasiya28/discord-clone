import styles from "../styles/Home.module.css";
import Sidebar from "../components/sidebar";
import ConversationList from "../components/conversationList";
import ChatView from "../components/ChatView";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      {/* sidebar */}
      <Sidebar />
      <div className={styles.main}>
        <ConversationList />
        <ChatView />
      </div>
    </div>
  );
}

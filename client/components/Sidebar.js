// (5) sidebar component
import styles from "../styles/sidebar.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import RoomAvatar from "./RoomAvatar";
import avatar1 from "../assets/avatar-1.webp";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.webp";
import avatar4 from "../assets/avatar-4.webp";

const dummyChannels = [
  {
    roomId: 1,
    roomName: "J.Cole",
    avatar: avatar1,
  },
  {
    roomId: 2,
    roomName: "Kendrick",
    avatar: avatar2,
  },
  {
    roomId: 3,
    roomName: "Eminem",
    avatar: avatar3,
  },
  {
    roomId: 4,
    roomName: "Lil Baby",
    avatar: avatar4,
  },
];

const Sidebar = () => {
  const router = useRouter(); //helps guide and direct the user to navigate between different pages of the app.
  const [channels, setChannels] = useState(dummyChannels);

  // to fetch all the channels
  useEffect(async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/getchannels`
      );
      const data = await response.json();
      setChannels(data);

      router.push(`?channel=${data[0].roomId}&name=${data[0].roomName}`);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      {channels.map((channel, index) => (
        <RoomAvatar
          key={index}
          id={channel.roomId} //channel.id for dummyChannels
          avatar={channel.avatar}
          name={channel.roomName} //channel.name for dummyChannels
        />
      ))}
    </div>
  );
};

export default Sidebar;

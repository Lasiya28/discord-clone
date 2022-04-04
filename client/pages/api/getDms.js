import { client } from "../../lib/client";

//fetching all personal conversations associated with the selected user.
const query = `*[_type == "conversations" && isDm==true]{
    "conversation": userReference->{
        name,
        walletAddress,
        "image": profileImage.asset->url
    }
}`;

const changeUrl = () => {
  router.push(`?conversation=${id}&name=${name}`);
};

export default async (req, res) => {
  try {
    const sanityResponse = await client.fetch(query);

    // if it's just a personal message, the properties retrieved won't be the same as a "channel".
    const response = sanityResponse.map((item) => {
      return {
        avatar: item.conversation.image, // convert avatar to just image
        name: item.conversation.name, // convert name to name
        id: item.conversation.walletAddress, // convert id to wallet address
      };
    });

    res.status(200).send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("⚠️", error);
  }
};

// If we create a user by connecting wallet for the first time, we need to create a user doc.
import { client } from "../../lib/client";

export default async (req, res) => {
  const { userAddress } = req.body;
  // console.log("userAddress", userAddress);

  // creating userDoc object and passing in the current address as the id.
  const userDoc = {
    _type: "users",
    _id: `${userAddress}-user`,
    name: "Unnamed",
    walletAddress: userAddress,
  };

  try {
    await client.createIfNotExists(userDoc);

    res.status(200).send("Successful");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

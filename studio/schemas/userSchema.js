// (1) Create/modify your own schema. Properties of the user that we need to keep track of.
export const userSchema = {
  name: "users",
  type: "document",
  title: "Users",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "walletAddress",
      type: "string",
      title: "Wallet Address",
    },
    {
      name: "profileImage",
      type: "image",
      title: "Profile Image",
    },
  ],
};

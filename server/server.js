// (4) set up server
import express from "express";
import Gun from "gun";
import cors from "cors";

const port = process.env.PORT || 9000;
const app = express();

app.use(cors());

app.use(Gun.serve);

app.get("/", (_, res) => {
  res.status(200).send("> DEBUG: Discord Node is Live");
});

const server = app.listen(port, () => {
  console.log(`> DEBUG: Discord Node is listening at http://localhost:${port}`);
});

Gun({ web: server });

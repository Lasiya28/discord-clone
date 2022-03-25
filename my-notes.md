# Set-up

All data is going to be set up in an ecosystem of nodes, that are going to constantly be
syncing up data with each other. This model is what is otherwise known as a relational database.

1. Create 3 folders : client, server, studio

2. cd client and create-next-app@latest .

3. Install sanity yarn global add @sanity/cli and sanity init --coupon cleverprogrammer
   ..... for free database store

4. cd server and run yarn init. Give name for server and entry point "server.js".

_server will be utilizing gun js_

5. set up vercel

# Setup studio folder for Sanity

_First thing to do is to create our own schemas in schemas.js_

6. Create userSchema.js, conversationSchema.js and add needed schema for sanity data store.

# Deploying decentralized Gun node in gun.js

7. Go to server folder and create server.js and run "yarn add express cors gun"

8. Add gun js server set up

9. Create heroku account to run server. project name "mydiscord-gun-node"

10. git init in root folder. Use cmd to run "heroku git:remote -a mydiscord-gun-node" from root project dir to deploy repo to heroku.

11.

12.

13.

14.

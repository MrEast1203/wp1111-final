# this is my final project

1. `yarn install:all`
2. `cd ..`
3. add your .env in /backend
   ![](https://i.imgur.com/wlyHD9U.png)
   請根據圖示加一個 DB 到你的 mongodb

```
MONGO_URL=
MODE=
NODE_ENV=development
```

for MONGO_URL is your DB url (MONGO_URL=mongodb+srv://<Accound_Name>:<Password>@mongodb.vpuysnl.mongodb.net/final?retryWrites=true&w=majority
)
Please remember to add /final after mongodb.net
for MODE: set MODE=Reset to init your DB
you can delete Reset after the init
for NODE_ENV: set it =development to test in localhost 4. `yarn start` 5. start a new terminal 6. `yarn server`

# this is our final project

1. `yarn install:all`
2. ![](https://i.imgur.com/wlyHD9U.png)
   請根據圖示加一個 DB 到你的 mongodb
3. add your .env in /backend

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

[111-1] Web Programming Final
(Group 19) 網頁 RPG
Demo 影片連結
這是一個網頁版的 RPG 小遊戲, 功能如下：

1. 點新遊戲會要你輸入名字，輸入後便會在後端創建資料並回傳一個 id 給你，id 是往後想繼續遊玩時使用的。
2. 點繼續便會要你輸入 id, 輸入在新遊戲得到的 id 時便能繼續遊戲
3. 存檔會自動進行，遊戲中每一天便會存檔一次
4. 遊戲中有四種行動可選，詳見下面遊戲說明之連結
5. 到第 10, 20, 30 天時會出現事件，可選擇打 boss 或逃走，如選擇打 boss 便會進入 boss 戰，逃走則死亡率+10
6. 當血量<=0 or 死亡率>=100, 便會 Game Over
7. 打敗了第 30 天的魔王後便能勝出
8. 遊戲結束後便會回到登入頁面

遊戲說明：https://hackmd.io/@hTj4gp5kQsSU7cJ-i_xCVg/SJyNNqx5j
Deployed 連結
https://github.com/MrEast1203/wp1111-final

frontend:
"axios": "^1.2.2",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-icons": "^4.7.1",
"react-scripts": "5.0.1",
"styled-components": "^5.3.6",
"uuid": "^9.0.0",
"web-vitals": "^2.1.4"

backend:
"cors": "^2.8.5",
"dotenv": "^16.0.3",
"express": "^4.18.2",
"mongoose": "^6.7.5",
"nodemon": "^2.0.20"
},
"devDependencies": {
"@babel/cli": "^7.19.3",
"@babel/core": "^7.20.5",
"@babel/node": "^7.20.5",
"@babel/preset-env": "^7.20.2"
},

/backend/server.js 參考自 Hack2

專題製作心得: 時間不夠用 QQ，雖然遊戲還有很大的進步空間，但至少他現在是一個完整的遊戲，希望大家喜歡。

FROM node:10

WORKDIR "user/app"

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "app.js" ]
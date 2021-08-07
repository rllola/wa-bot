FROM node:current-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm ci --only=production

COPY . .

CMD ["node", "src/main.js"]

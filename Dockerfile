FROM node:current-alpine

WORKDIR /usr/src/app
ENV NODE_ENV=production

COPY package*.json ./

RUN npm install
RUN npm ci --only=production

COPY . .

CMD ["node", "src/main.js"]

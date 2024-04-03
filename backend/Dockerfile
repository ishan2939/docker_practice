FROM node:alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm i

COPY . .

EXPOSE 8000

CMD ["node", "server.js"]
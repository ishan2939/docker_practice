FROM node:alpine as build

WORKDIR /usr/src/app

RUN npm cache clean --force

COPY package.json package-lock.json ./

RUN npm install --verbose

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

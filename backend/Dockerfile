FROM node:alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm i

COPY . .

# RUN npm run build

# COPY --chown=node:node

EXPOSE 8000

CMD ["node", "server.js"]
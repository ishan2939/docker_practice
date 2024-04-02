FROM node:alpine as build

WORKDIR /usr/src/app

RUN npm cache clean --force

COPY package.json package-lock.json ./

RUN npm install --verbose

COPY . .

# RUN npm run build --prod

# FROM nginx:alpine

# COPY nginx.conf /etc/nginx/nginx.conf
# COPY --from=build /app/dist/practice2/ /usr/share/nginx/html


# COPY . /usr/src/app/

# RUN npm install

EXPOSE 3000

# CMD ["nginx", "-g", "daemon off;"]

# CMD ["ng", "serve", "--host", "0.0.0.0"]

# CMD ["npm", "run", "dev"]

CMD ["npm", "start"]

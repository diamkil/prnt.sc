FROM node:14-buster

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN apt update
RUN apt upgrade -y
RUN apt install -y xsel

RUN yarn install

COPY . .

RUN npm run ssr:build

EXPOSE 8000

CMD [ "npm", "run", "ssr:start" ]

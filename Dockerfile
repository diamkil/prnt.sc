FROM node:14

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN npm run ssr:build

EXPOSE 8000

CMD [ "npm", "run", "ssr:start" ]
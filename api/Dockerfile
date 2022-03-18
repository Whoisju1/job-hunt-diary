FROM node:17.2-alpine3.14

WORKDIR /api

COPY ./package.json .

COPY ./package-lock.json .

RUN npm i

COPY . .

RUN npm run build

CMD [ "node", "build" ]

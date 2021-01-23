FROM node:14.13.1

WORKDIR /api

COPY ./package.json .

COPY ./package-lock.json .

RUN npm i

COPY . .

RUN npm run build

CMD [ "node", "build" ]
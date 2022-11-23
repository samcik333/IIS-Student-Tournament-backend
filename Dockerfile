FROM node:14.16.0-slim

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build

EXPOSE 5005

CMD yarn start
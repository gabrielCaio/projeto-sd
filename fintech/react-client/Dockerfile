FROM node:21-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN yarn install

ENTRYPOINT ["/app/entrypoint.sh"]
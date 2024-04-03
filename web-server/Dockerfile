FROM node:21-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN yarn install

EXPOSE 3001

ENTRYPOINT ["/app/entrypoint.sh"]
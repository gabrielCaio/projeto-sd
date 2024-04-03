FROM node:21-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn install

EXPOSE 3000

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
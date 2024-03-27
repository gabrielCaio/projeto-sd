FROM node:21-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn install

EXPOSE 3001

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
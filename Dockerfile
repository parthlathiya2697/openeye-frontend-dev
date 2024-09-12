FROM node:16.15.1-alpine3.16

EXPOSE 3000

COPY . .

RUN npm install
RUN npm i

WORKDIR /src

CMD ["npm", "start"]
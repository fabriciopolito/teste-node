FROM node:current-alpine3.20

RUN mkdir -p /usr/src/node-saa-teste

WORKDIR /usr/src/node-saa-teste

COPY package.json /usr/src/node-saa-teste/

RUN npm install

COPY . /usr/src/node-saa-teste/

CMD [ "npm", "start" ]

EXPOSE 3000
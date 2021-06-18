# base image - apline
FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./

# install dependencies
RUN npm install

COPY ./ ./

# setup run command
CMD ["npm", "start"]
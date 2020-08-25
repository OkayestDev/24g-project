FROM node:latest

RUN mkdir /app
WORKDIR /app
COPY . /app/
RUN cd /app

ENV NODE_ENV=development
RUN npm install
RUN npm run migrations
RUN npm run seeds
FROM node:latest

RUN mkdir /app
WORKDIR /app
COPY . /app/
RUN cd /app

ENV NODE_ENV=development
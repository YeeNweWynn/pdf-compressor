# syntax=docker/dockerfile:1.4
FROM node:20.3.1

COPY package.json ./
COPY package-lock.json ./
RUN npm install

RUN mkdir /project
WORKDIR /project

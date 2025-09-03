FROM node:lts-alpine

RUN apk update && apk add python3 make g++postgresql-client

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 3000
CMD ["npm", "run", "docker-dev"]

FROM node:lts-alpine

# Needed to compile native modules like sqlite3
RUN apk update && apk add python3 make g++

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 3000
CMD ["npm", "run", "docker-dev"]

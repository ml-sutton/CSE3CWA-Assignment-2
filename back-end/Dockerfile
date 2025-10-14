FROM node:lts-alpine


RUN npm i -g npm@latest


WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 3000
CMD ["npm", "run", "docker-dev"]

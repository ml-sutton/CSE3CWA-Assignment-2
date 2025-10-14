FROM node:lts-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

RUN rm -rf .next

EXPOSE 3000
CMD ["npm", "run", "docker-dev"]

FROM node:lts-alpine


WORKDIR /app
COPY package*.json ./
RUN npm ci

RUN npx prisma generate
RUN npx prisma migrate deploy

RUN rm -rf .next

COPY . .

EXPOSE 3000
CMD ["npm", "run", "docker-dev"]

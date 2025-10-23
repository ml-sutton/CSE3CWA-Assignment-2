# -------- Stage 1: Build --------

FROM node:lts-alpine AS builder



WORKDIR /app



COPY package*.json ./

RUN npm install



COPY . .

RUN npm run build




FROM node:lts-alpine



# Install tini for proper signal handling

RUN apk add --no-cache tini



ENV NODE_ENV=production



WORKDIR /app




COPY --from=builder /app/package*.json ./

COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/.next ./.next

COPY --from=builder /app/public ./public



# Use tini as entrypoint

ENTRYPOINT ["/sbin/tini", "--"]




EXPOSE 3000



CMD ["npm", "start"]

FROM node:20-alpine  # Version Alpine récente

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

USER node
EXPOSE 3000

CMD ["node", "src/index.js"]

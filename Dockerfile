FROM node:14-alpine  # Version Alpine ancienne avec vulnérabilités

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 3000

CMD ["node", "src/index.js"]

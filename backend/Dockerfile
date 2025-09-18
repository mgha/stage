FROM node:20-alpine

WORKDIR /app
COPY . .

# Copier package.json et package-lock.json pour installer les dépendances
COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

RUN npm install -g ts-node nodemon

# Commande de démarrage avec nodemon pour le watch mode
CMD ["npx", "ts-node-dev", "--respawn", "--transpile-only", "--watch", "src", "src/main.ts"]

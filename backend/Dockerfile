# Étape 1 — Utilise Node.js comme base
FROM node:18

# Étape 2 — Crée un dossier de travail dans le container
WORKDIR /app

# Étape 3 — Copie les fichiers de dépendances
COPY package*.json ./

# Étape 4 — Installe les dépendances
RUN npm install

# Étape 5 — Copie tout le code
COPY . .

# Étape 6 — Expose le port 3000
EXPOSE 3000

# Étape 7 — Lance le serveur
CMD ["node", "index.js"]
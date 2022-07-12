# Arquivo de Docker Nodejs Simples

# Dockerfile de contêiner duplo para processo de construção separado.

# Estamos começando com a mesma imagem base, mas estamos declarando
# que este bloco emite uma imagem chamada DEPS que nós
# não será implantado - ele apenas instala nossos Deps. de YARN
FROM node:16.15.0-alpine

# Copie APENAS a package.json e o yarn.lock
# para que esta camada de "instalação do yarn" seja apenas recalculada
# se estes arquivos de dependência mudarem. Belo hack de velocidade!

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Puxe os arquivos construídos de BUILD - Que nós precisamos:
# 1. o package.json e o yarn.lock
# 2. o build do Nextjs de saída e arquivos estáticos
# 3. os node_modules.

COPY next.config.js  ./next.config.js
# COPY src ./src
# COPY public ./public

CMD ["yarn", "dev" ]
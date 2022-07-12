# Arquivo de Docker Nodejs Simples

# Dockerfile de contêiner duplo para processo de construção separado.

# Estamos começando com a mesma imagem base, mas estamos declarando
# que este bloco emite uma imagem chamada DEPS que nós
# não será implantado - ele apenas instala nossos Deps. de YARN
FROM node:16.15.0-alpine AS deps

# Copie APENAS a package.json e o yarn.lock
# para que esta camada de "instalação do yarn" seja apenas recalculada
# se estes arquivos de dependência mudarem. Belo hack de velocidade!

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# fim da imagem deps

# Agora fazemos um contêiner para lidar com nosso Build

FROM node:16.15.0-alpine AS build

# Montar nosso diretório de trabalho novamente
WORKDIR /app

# Traga os deps. que instalamos e agora também
# o resto do código fonte para construir o Próximo
# servidor para produção
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# Eliminar todas as dependências de desenvolvimento, já que não
# precisam deles para executar o servidor real.
RUN rm -rf node_modules
RUN yarn install --production --frozen-lockfile --ignore-scripts --prefer-offline

# fim da imagem de build

# Isto inicia a imagem de execução de nossa aplicação - o resultado final da construção.

FROM node:16.15.0-alpine

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Puxe os arquivos construídos de BUILD - Que nós precisamos:
# 1. o package.json e o yarn.lock
# 2. o build do Nextjs de saída e arquivos estáticos
# 3. os node_modules.
WORKDIR /app
COPY --from=build --chown=nextjs:nodejs /app/package.json /app/yarn.lock ./
COPY --from=build --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=build --chown=nextjs:nodejs /app/public ./public
COPY --from=build --chown=nextjs:nodejs /app/.next ./.next

# 4. OPCIONALMENTE o next.config.js, se seu aplicativo tiver um.
# COPY --from=build --chown=nextjs:nodejs /app/next.config.js  ./

USER nextjs

EXPOSE 3000
CMD [ "yarn", "start" ]
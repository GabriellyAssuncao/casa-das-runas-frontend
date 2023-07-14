# Base image com as dependências do Node.js
FROM node:14-alpine

# Configuração do diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração da aplicação
COPY package.json yarn.lock ./

# Instala as dependências da aplicação
RUN yarn install

# Copia o restante dos arquivos da aplicação
COPY . .

# Constrói a aplicação React para produção
RUN yarn build

# Configurações de ambiente
ENV PORT=8080
ENV NODE_ENV=production

# Expõe a porta do servidor da aplicação
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["yarn", "start"]

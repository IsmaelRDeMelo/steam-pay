# Estágio 1: Build da aplicação React
FROM node:18-alpine as build

WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o resto do código da aplicação
COPY . .

# Builda a aplicação para produção
RUN npm run build

# Estágio 2: Servidor de produção com Nginx
FROM nginx:stable-alpine

# Copia os arquivos de build do estágio anterior para o diretório do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
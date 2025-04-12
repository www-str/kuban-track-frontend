FROM node:20.18.3-alpine AS build-stage
WORKDIR /app
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm ci
RUN npm i --save-dev @types/react-slick
COPY . .
RUN npm install -g serve
RUN npm run build
# или другая команда для сборки приложения через npm

# FROM node:20.18.3-alpine AS production-stage
# WORKDIR /app

# # /app/dist или другой путь где лежат скомпилированные файлы
# COPY --from=build-stage /app/dist /app/output
EXPOSE 80
# # -s или --single указывает что это будет единственная страница (SPA)
# # -l или --listen указывает порт для прослушивания, по дефолту 3000
CMD ["serve", "/app/dist", "-l", "80"]
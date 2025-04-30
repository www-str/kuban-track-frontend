FROM node:23.11.0 AS builder
WORKDIR /app
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm i --save-dev @types/react-slick
RUN npm ci
COPY . .

RUN npm run build

FROM node:23.11.0-alpine AS production
WORKDIR /app

COPY --from=builder /app/dist /app_release
EXPOSE 81

RUN npm install -g serve
CMD ["serve", "-s", "/app_release", "-l", "81"]

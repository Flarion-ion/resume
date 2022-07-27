#stage 1
FROM node:16.10.0 as node
WORKDIR /app
COPY ./package.json .
COPY ./package-lock.json .

RUN npm install
COPY . .
RUN npm run build
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/resume /usr/share/nginx/html

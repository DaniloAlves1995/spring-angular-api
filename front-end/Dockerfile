FROM node:latest as angular
WORKDIR /app

COPY package.json /app
RUN npm install -g npm@8.13.2
RUN npm install
COPY . .
RUN ./node_modules/.bin/ng build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/front-end /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

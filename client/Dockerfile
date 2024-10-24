FROM node:22 AS build

ARG HAPROXY_SERVICE_URL
ENV HAPROXY_SERVICE_URL=$HAPROXY_SERVICE_URL

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80



CMD ["nginx", "-g", "daemon off;"]
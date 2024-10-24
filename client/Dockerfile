FROM node:22 AS build

ARG REACT_APP_HAPROXY_SERVICE_URL
ENV REACT_APP_HAPROXY_SERVICE_URL=$REACT_APP_HAPROXY_SERVICE_URL
RUN echo "REACT_APP_HAPROXY_SERVICE_URL is set to $REACT_APP_HAPROXY_SERVICE_URL"
WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80



CMD ["nginx", "-g", "daemon off;"]
FROM node:22 
ARG DEFAULT_PORT=3002
ENV PORT=${DEFAULT_PORT}

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app


EXPOSE ${PORT}



CMD ["node", "server.js"]
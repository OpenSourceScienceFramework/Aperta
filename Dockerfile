FROM node:16
LABEL org.opencontainers.image.source https://github.com/OpenSourceScienceFramework/Aperta

WORKDIR /usr/src/app

COPY package*.json ./
ARG NODE_ENV
RUN npm install --ignore-scripts
COPY . .

RUN sed -i 's/0.0.0/'`npm pkg get version | tr -d '"'`'/g' config/app.json

RUN npm run build

CMD ["npm", "start"]
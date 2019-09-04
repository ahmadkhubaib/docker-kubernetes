FROM node:alpine
WORKDIR /usr/project
COPY package.json .
RUN npm install
COPY . .
CMD ["npm","start"]
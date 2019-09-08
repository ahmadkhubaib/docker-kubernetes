FROM node:alpine as createProductionBuild
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=createProductionBuild /app/build /usr/share/nginx/html
FROM node:alpine as createProductionBuild
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=createProductionBuild /app/build /usr/share/nginx/html
# Base image, NOTE alpine version of image means it will have basic image with core file
FROM node:alpine
# copy files from local hdd. source, dest in container
COPY ./ ./
# install deps
RUN npm install
# startup command
CMD [ "npm","start" ]
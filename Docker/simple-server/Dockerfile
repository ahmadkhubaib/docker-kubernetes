# Base image, NOTE alpine version of image means it will have basic image with core file
FROM node:alpine
# add work dir to prevent using root dir
WORKDIR /usr/project
# copy files from local hdd. source, dest in container
# check for change in package.json, run npm install 
# otherwise it will use cahched version to improve performance
COPY ./package.json ./
# install deps
RUN npm install
# copy files other than deps
COPY ./ ./
# startup command
CMD [ "npm","start" ]
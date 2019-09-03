# Define base image
FROM alpine
# Download and install dependencies
RUN apk add --update redis
# Tell image what to do after it starts as a container
CMD [ "redis-server" ]
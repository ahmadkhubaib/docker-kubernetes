# Guidelines for creating docker-compose.yml

## Define version: ''

## Define services:

## Define start commands inside of services

## if there is an image define it using image:

## define restart policy in case of error ('no',always,on-failure,unless-stopped)

## if there is a custom image use build: .

## if Dockerfile is present with another name use build: context: . dockerfile: <name>

## map ports if needed with ports: - "localport:serviceport"

## mount volumes to reference local files with container for change on the fly

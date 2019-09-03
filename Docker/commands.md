### Hello World, basic command

1. `docker run hello-world` (where everything starts)

### Override commands

1. `docker run busybox echo hi there` (override startup command to echo hi there)
2. `docker run busybox ls` (lists all directories of this container)

### List all running containers processes

1. `docker ps` (will return nothing if no container is running)
2. `docker run busybox ping google.com` (to keep busy box running)
3. `docker ps`
4. `docker ps --all` (list all containers that were created on this env)

### Difference between docker run, docker create, docker start

1. `docker run` = `docker create <ImageName>` + `docker start -a <ContainerID>`
2. `-a` flag is used to stdout all outputs of container to terminal

### Clear docker history & cache of downloaded containers

1. `docker system prune`

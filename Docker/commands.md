### Hello World, basic command

1. `docker run hello-world` (where everything starts, basic hello-world container)

### Override commands

1. `docker run busybox echo hi there` (override startup command of busybox container to echo hi there)
2. `docker run busybox ls` (lists all directories of this container)

### List all running containers processes

1. `docker ps` (will return nothing if no container is running)
2. `docker run busybox ping google.com` (to keep busybox container running)
3. `docker ps`
4. `docker ps --all` (list all containers that were created on this env)

### Difference between docker run, docker create, docker start

1. `docker run` = `docker create <ImageName>` + `docker start -a <ContainerID>`
2. `-a` flag is used to stdout all outputs of container to terminal

### Clear docker history & cache of downloaded containers

1. `docker system prune`

### Display logs

1. `docker create busybox echo hi there` (to get ID of busybox container)
2. `docker logs <ID>` (this will NOT re run / re create the container, it will just give logs of previous operations)

### Kill/Stop a container

1. `docker stop <containerID>` (do some cleanup and shutdown gracefully, after 10 secs its gonna get killed anyway)
2. `docker kill <containerID>` (immediately kill a container)

### Executing commands in running container

1. `docker exec -it <containerID> <command>` (e.g, docker exec -it xxxxxxx redis-cli, to use redis cli in redis docker server container)

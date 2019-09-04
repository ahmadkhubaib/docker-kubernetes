# Guidelines for interacting with docker client

### Hello World, basic command

1. `docker run hello-world` (where everything starts, basic hello-world container)
2. `docker run -p localport:containerport <containerID/tag>`

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
2. when a container is created it has 3 channels STDIN,STDOUT,STDERR for input,ouput,error respectively. `-it` flag is used to pass input commands from our terminal to container STDIN channel.
3. `docker exec -it <containerID> sh` (sh is used to spawn a shell in container)
4. `docker run -it busybox sh` (example of using sh with busybox container)

### Build Dockerfile

1. File name should be `Dockerfile` in root directory of project.
2. `docker build -t username/projectname:version .` (if version is not specified, its latest by default.) (. is use to specify current directory)
3. `docker build -t kman4you/simpleserver .` (example)

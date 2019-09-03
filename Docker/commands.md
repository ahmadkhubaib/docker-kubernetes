### Hello World, basic command

1. docker run hello-world (where everything starts)

### Override commands

1. docker run busybox echo hi there (override startup command to `echo` hi there)
2. docker run busybox ls (lists all directories of this container)

### List all running containers processes

1. docker ps (will return nothing if no container is running)
2. docker run busybox ping google.com (to keep busy box running)
3. docker ps

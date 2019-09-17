# Guidelines for interacting with kubectl

### To create k8s object from yaml file

`kubectl apply -f <kubernetes object .yaml config file>`

### To delete k8s object from yaml file

`kubectl delete -f <kubernetes object .yaml config file>`

### To see status of pods

`kubectl get pods`

### To see status of services

`kubectl get services`

### To see information about a specific pod or all pods

`kubectl describe <OBJECT_TYPE> <OBJECT_NAME>`

### To update image in Deployment after pushing a new image version to docker hub

`kubectl set image deployment/<deployment_metadata_name> <container_name>=dockerid/imagename:version`

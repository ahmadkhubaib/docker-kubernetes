# Guidelines for interacting with kubectl

### To create k8s object from yaml file

`kubectl apply -f <kubernetes .yaml config file>`

### To see status of pods

`kubectl get pods`

### To see status of services

`kubectl get services`

### To see information about a specific pod or all pods

`kubectl describe <OBJECT_TYPE> <OBJECT_NAME>` e.g kubectl describe pod client-pod

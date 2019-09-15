# Docker & Kubernetes

## Docker

## Kubernetes

### Setup, Enbaling Kubernetes in docker-for-windows

1. Enable Kubernetes in docker-for-windows
2. Don't install minikube.
3. Follow [Kubernetes UI](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/ "Kubernetes UI")
4. Create admin user `kman4you` using `kubectl apply -f admin.yaml` and `kubectl apply -f admin-binding.yaml`.
5. If you want to change the name from `kman4you` to `YOUR_NAME` replace it with your name in all files.
6. `admin.yaml` and `admin-binding.yaml` are available [HERE](https://github.com/kman4you/docker-kubernetes/tree/master/Kubernetes/Kubernetes-Setup-files "admin create")
7. Follow guide `find token.txt` in previous link.
8. Once everything is completed run `kubectl proxy` and access your UI from [http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/](http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/)
9. Select Bearer option and paste your token in that field and you are good to go.
10. `kubectl port-forward <pod-name> 8081:<PORT_NAME_TO ACCESS_LOCALLY>`

### Setup, by completely removing docker, .kube(%USERPROFILE%) from OS

1. Completely uninstall docker and run dr.ps1 from [HERE](https://github.com/kman4you/docker-kubernetes/tree/master/Kubernetes/Kubernetes-Setup-files "remove remains of docker") using powershell as ADMIN
2. install using choco `choco install minikube` `choco install kubernetes-cli` as ADMIN
3. Run `minikube start --vm-driver hyperv --hyperv-virtual-switch "myminikube"` in cmd as ADMIN.
   1. it assumes hyperv is installed and running and a network switch `myminikube` is created in hyper v.
   2. follow hyper v setup folder from [HERE](https://github.com/kman4you/docker-kubernetes/tree/master/Kubernetes/Kubernetes-Setup-files "hyper v setup")
4. wait.....
5. when everything finishes run `minikube status` to check the status.

# Docker & Kubernetes

## Docker

## Kubernetes

1. Enable Kubernetes in docker-for-windows
2. Don't install minikube.
3. Follow [Kubernetes UI](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/ "Kubernetes UI")
4. Create admin user `kman4you` using `kubectl apply -f admin.yaml` and `kubectl apply -f admin-binding.yaml`.
5. If you want to change the name from `kman4you` to `YOUR_NAME` replace it with your name in all files.
6. `admin.yaml` and `admin-binding.yaml` are available [HERE](https://github.com/kman4you/docker-kubernetes/tree/master/Kubernetes/windows10-create-admin "admin create")
7. Follow guide `find token.txt` in previous link.
8. Once everything is completed run `kubectl proxy` and access your UI from [http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/](http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/)
9. Select Bearer option and paste your token in that field and you are good to go.

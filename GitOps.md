# ArgoCD Minimalist Installation 

This document provides the **"One-Shot"** commands to deploy ArgoCD and retrieve credentials.

## 1. Fast Deploy
Run these two commands to initialize the GitOps controller:

```bash
kubectl create ns argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

## 2. Credentials & Access
Once the pods are **Running**, use these two snippets to get in:

### Get Admin Password
```bash
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo
```

### Access UI (Port-Forward)
```bash
kubectl port-forward svc/argocd-server -n argocd 8080:443
```
**URL:** [https://localhost:8080](https://localhost:8080) | **User:** admin

### Access throught Load Balancer
```bash
kubectl edit svc/argocd-server -n argocd
# add service type LoadBalancer
kubectl get svc/argocd-server -n argocd
```

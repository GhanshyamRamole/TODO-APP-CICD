# 🚀 DevOps Arsenal: End-to-End DevSecOps Kubernetes Project

![AWS](https://img.shields.io/badge/AWS-Cloud-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Terraform](https://img.shields.io/badge/Terraform-IaC-7B42BC?style=for-the-badge&logo=terraform&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestration-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-D24939?style=for-the-badge&logo=jenkins&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Containerization-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

This repository contains a production-grade implementation of a Three-Tier MERN stack (MongoDB, Express, React, Node.js) application deployed on AWS EKS. It demonstrates a complete DevSecOps lifecycle, integrating infrastructure provisioning, automated security scanning, GitOps deployments, and real-time monitoring.

---

## 🏗️ Architecture

![Architecture Diagram](./architecture-diagram.png)

The workflow follows industry best practices:
1.  **Infrastructure as Code:** Terraform provisions the VPC, EC2 (Jenkins), and EKS Cluster.
2.  **Configuration Management:** Ansible configures the Jenkins Server with necessary tools.
3.  **CI Pipeline (Jenkins):** Code Checkout → Unit Tests → SonarQube Analysis → Security Scans (Trivy/OWASP) → Docker Build → Push to ECR.
4.  **CD Pipeline (GitOps):** Automatic updates to Kubernetes manifests using ArgoCD/Jenkins.
5.  **Secure Networking:** Application runs on EKS with an **Nginx Reverse Proxy** sidecar pattern, allowing secure `ClusterIP` communication between Frontend and Backend without exposing internal APIs.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Cloud Provider** | AWS (EKS, EC2, ECR, IAM, ALB, VPC, Route53) |
| **Infrastructure as Code** | Terraform |
| **Configuration Mgmt** | Ansible, Shell Scripting |
| **CI/CD** | Jenkins (Groovy Pipeline), ArgoCD |
| **Containerization** | Docker, Docker Compose |
| **Orchestration** | Kubernetes (EKS), Helm |
| **Security (DevSecOps)** | SonarQube, OWASP Dependency Check, Trivy |
| **Application** | React.js (Frontend), Node.js/Express (Backend), MongoDB (DB) |
| **Monitoring** | Prometheus, Grafana |

---

## ✨ Key Features

* **1-Click Infrastructure:** Complete environment provisioning using Terraform.
* **DevSecOps Integration:** Automated vulnerability scanning for files and Docker images before deployment.
* **Dynamic Versioning:** Automatic Docker image tagging and ECR pushing via Jenkins.
* **Cost-Optimized:** Uses `ClusterIP` and Nginx Reverse Proxy to reduce AWS Load Balancer costs.
* **Zero-Downtime Deployment:** Kubernetes `RollingUpdate` strategy ensures high availability.
* **Ingress Controller:** AWS ALB Ingress Controller configured for path-based routing.
* **GitOps Deployment: ArgoCD monitors the Kubernetes manifests and ensures the cluster state matches the repository.
* **Observability: A full monitoring stack tracks cluster health in real-time.

---

## 📂 Repository Structure

```bash
├── Application-Code/       # Source code for MERN App
│   ├── frontend/           # React App + Nginx Config + Dockerfile
│   └── backend/            # Node.js API + Dockerfile
├── GitOps.md
├── K8s-manifests-files/    # K8s Manifests (Deployments, Services, Ingress, Secrets)
├── Observability
│   └── helm 
│       ├── grafana.md
│       └── prometheus.md
├── Jenkins-Server-tf/      # IaC scripts (main.tf, variables.tf, vpc.tf)
├── Jenkins-files           # Declarative CI/CD Pipeline
└── README.md               # Project Documentation
```
---

# 🚀 Getting Started

## 🏗️ Architecture & Workflow

The workflow is divided into two major stages: **Infrastructure Provisioning** and **Application Deployment**.

### 1. Infrastructure Stage (Terraform)
Located in `Jenkins-Server-tf/`, Terraform automates the setup of the build environment:
* Provisions a **VPC**, Public Subnets, and Security Groups.
* Launches an **EC2 Instance** to serve as the Jenkins Controller.
* **User Data Script (`userdata-tools-install.sh`):** Automatically installs Jenkins, Docker, Trivy, and Kubectl on startup.

### 2. Deployment Stage (Jenkins & Kubernetes)
Located in `Jenkins-files/` and `K8s-manifests-files/`:
* **Jenkins Pipelines:**
    * **Build:** Dockerizes `Application-Code/frontend` and `Application-Code/backend`.
    * **Scan:** (Optional) Scans images using Trivy for vulnerabilities.
    * **Push:** Uploads artifacts to Docker Hub / ECR.
    * **Deploy:** using ArgoCD
* **Kubernetes Cluster:**
    * Runs the Frontend and Backend as stateless deployments.
    * Runs MongoDB as a StatefulSet with Persistent Volume Claims (PVC).
    * Exposes the app via Services and Ingress.

---

## 🛠️ Prerequisites

* **AWS Account** with active Access Keys.
* **Terraform CLI** installed locally.
* **Kubernetes Cluster** EKS running and accessible.
* **ECR**. Storing images of backend & frontend 

---

🚀 Getting Started
==================

🏗️ Infrastructure Provisioning (Terraform)
-------------------------------------------

Located in `Jenkins-Server-tf/`, Terraform automates the setup of the build environment:

-   Provisions a **VPC**, Public Subnets, and Security Groups.

-   Launches an **EC2 Instance** to serve as the Jenkins Controller.

-   **User Data Script (`userdata-tools-install.sh`):** Automatically installs Jenkins, Docker, Trivy, and Kubectl on startup.

Bash

```
cd Jenkins-Server-tf
terraform init
terraform apply --auto-approve

```

* * * * *

🛠️ Step-by-Step Deployment Guide
---------------------------------

### Phase 1: Jenkins Configuration

1.  **Access Jenkins:** Open `http://<jenkins_public_ip>:8080` and unlock it using the password found at `/var/lib/jenkins/secrets/initialAdminPassword`.

2.  **Plugins:** Install `Docker Pipeline`, `Kubernetes CLI`, `NodeJS`, `Pipeline: Stage View`, `Terraform`, `Sonarqube`, and `owasp`.

3.  **Pipelines:** * Create `frontend-deploy` using `Jenkins-files/frontend.yml`.

    -   Create `backend-deploy` using `Jenkins-files/backend.yml`.

### Phase 2: GitOps with ArgoCD

ArgoCD automates the delivery of application manifests. For detailed credential retrieval and UI access, see the **[GitOps Setup Guide](https://www.google.com/search?q=./GitOps.md)**.

-   **Fast Deploy:**

Bash

```
kubectl create ns argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

```

### Phase 3: Monitoring & Observability

The observability stack provides real-time insights into your EKS cluster.

-   **Prometheus:** See the **[Prometheus Installation Guide](https://www.google.com/search?q=./Observability/helm%2520/prometheus.md)** for Helm deployment commands.

-   **Grafana:** See the **[Grafana Installation Guide](https://www.google.com/search?q=./Observability/helm%2520/grafana.md)** for dashboard setup and admin password retrieval.

* * * * *

🤝 Contributing
===============

1.  Fork the repository.

2.  Create a feature branch (`git checkout -b feature/AmazingFeature`).

3.  Commit changes (`git commit -m 'Add AmazingFeature'`).

4.  Push to the branch and open a Pull Request.


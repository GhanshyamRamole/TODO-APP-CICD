# 🚀 DevOps Arsenal: End-to-End DevSecOps Kubernetes Project

![AWS](https://img.shields.io/badge/AWS-Cloud-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Terraform](https://img.shields.io/badge/Terraform-IaC-7B42BC?style=for-the-badge&logo=terraform&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestration-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-D24939?style=for-the-badge&logo=jenkins&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Containerization-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

A production-grade implementation of a Three-Tier MERN Application (MongoDB, Express, React, Node) deployed on **AWS EKS** using a secure CI/CD pipeline. This project demonstrates the complete DevSecOps lifecycle, from Infrastructure Provisioning to Monitoring.

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

---

## 📂 Repository Structure

```bash
├── Application-Code/       # Source code for MERN App
│   ├── frontend/           # React App + Nginx Config + Dockerfile
│   └── backend/            # Node.js API + Dockerfile
├── K8s-manifests-files/    # K8s Manifests (Deployments, Services, Ingress, Secrets)
├── Jenkins-Server-tf/      # IaC scripts (main.tf, variables.tf, vpc.tf)
├── Jenkins-files           # Declarative CI/CD Pipeline
└── README.md               # Project Documentation
```
---

# 🚀 Getting Started
.
.
.
.
.

---

# 🤝 Contributing
- Fork the repository.

- Create a feature branch (git checkout -b feature/AmazingFeature).

- Commit changes (git commit -m 'Add AmazingFeature').

- Push to branch (git push origin feature/AmazingFeature).

- Open a Pull Request.
---


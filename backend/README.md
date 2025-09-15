# 🚀 Node.js App - Déploiement avec Helm

## 📦 Prérequis
- Kubernetes (`kubectl` installé et configuré)
- Helm 3+
- Cluster Kubernetes (local avec Minikube, kind, ou distant)
- Docker (si besoin de builder l'image localement)

## 📂 Structure du projet
```plaintext
.
├── helm/
│ └── nodejs-app/ # Chart Helm de l'application
├── src/ # Code source Node.js
├── package.json
└── README.md
```
## ⚙️ Pre-Installation :
clone le projet :
```bash
git clone https://github.com/mgha/stage.git
```

modifier la valeur suivante: 
```bash
path: /Users/mghannem/Sites/stage/src
```

....to be completed

## ⚙️ Installer l'application avec Helm :

```bash
helm install stage ./helm
```

## 📡 Vérifier le déploiement :
```bash
kubectl get pods
```

## 🛑 Désinstallation
Pour désinstaller complètement la release :

```bash
helm uninstall stage
```

## 🛠️ Tools

- [Kubernetes](./docs/kubernetes/README.md) 🐳
- [Docker](./docs/docker/README.md) 🐋
- [Helm](./docs/helm/README.md) ⛵
- [Node.js](./docs/nodejs/README.md) 📦
- [NPM](./docs/npm/README.md) 📦

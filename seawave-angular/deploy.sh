#!/bin/bash

# Configuration
REMOTE_USER="linuxuser"
REMOTE_HOST="45.76.192.16"
REMOTE_DIR="/home/linuxuser/eric-website"

# Build the project files list
FILES_TO_COPY=(
  "Dockerfile.prod"
  "nginx.prod.conf"
  "docker-compose.prod.yml"
  "package.json"
  "package-lock.json"
  "src"
  "angular.json"
  "tsconfig.json"
  "tsconfig.app.json"
)

echo "Starting deployment..."

# Create remote directory if it doesn't exist
ssh ${REMOTE_USER}@${REMOTE_HOST} "mkdir -p ${REMOTE_DIR}"

# Copy files to remote server
for file in "${FILES_TO_COPY[@]}"; do
  echo "Copying ${file}..."
  scp -r "$file" ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_DIR}/
done

# Install Docker and Docker Compose on remote server if not already installed
echo "Setting up Docker on remote server..."
ssh ${REMOTE_USER}@${REMOTE_HOST} "
  if ! command -v docker &> /dev/null; then
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker \$USER
  fi
"

# Deploy the application
echo "Deploying application..."
ssh ${REMOTE_USER}@${REMOTE_HOST} "
  cd ${REMOTE_DIR}
  docker compose -f docker-compose.prod.yml down -v
  docker compose -f docker-compose.prod.yml up --build -d
"

echo "Deployment completed!" 
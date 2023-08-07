pipeline {
  agent any
  stages {
    stage('Build and Push Docker Images') {
      steps {
        sh '''  script {
                    // Build the client Docker image
                    sh \'docker build -t mern-client ./client\'

                    // Build the server Docker image
                    sh \'docker build -t mern-server ./server\'

                    // Log in to Docker Hub using your Docker Hub credentials
                    docker.withRegistry(\'https://registry-1.docker.io/v2/\', credentialsId: \'1\') {
                    // Push the client Docker image to Docker Hub
                    sh \'docker push hibab/mern-client:latest\'

                    // Push the server Docker image to Docker Hub
                    sh \'docker push hibab/mern-server:latest\'
                    }
                }
            }'''
        }
      }

    }
  }
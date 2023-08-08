pipeline {
  agent any
   environment {
        DOCKERHUB_CREDENTIALS = credentials('hibabellaly-dockerhub')
   }
   stages {
        stage('Build') {
          steps {
           bat 'docker build -t hibab/mern-server:latest ./server'
           bat 'docker build -t hibab/mern-client:latest ./client'
            }
         }
        stage('Push') {
         steps{
           script {
               withDockerRegistry([credentialsId: "${DOCKERHUB_CREDENTIALS}", url: ""])
               {
                  bat 'docker push hibab/mern-server:latest'
                  bat 'docker push hibab/mern-client:latest'
                }
             }
         } 
      }
    }
   }
  

pipeline {
  agent any
   stages {
        stage('Build') {
          steps {
           bat 'docker build -t hibab/mern-server:latest ./server'
           bat 'docker build -t hibab/mern-client:latest ./client'
            }
         }
        stage('Push') {
         steps{
               withDockerRegistry(credentialsId: DOCKERHUB_CREDENTIALS.id, url: "")
               {
                  bat 'docker push hibab/mern-server:latest'
                  bat 'docker push hibab/mern-client:latest'
               }
         } 
      }
    }
   }
  

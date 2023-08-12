pipeline {
  agent any
   stages {
        stage('Build') {
          steps {
           bat 'docker build -t hibab/mern-server:latest ./server'
           bat 'docker build -t hibab/mern-client:latest ./client'
            }
         }
        stage('test') {
            steps {
                script {
                    // Run tests for the server
                    bat 'docker run --rm hibab/mern-server:latest npm test'

                    // Run tests for the client
                    bat 'docker run --rm hibab/mern-client:latest npm test'
                }
            }
        }
        stage('Push') {
         steps{
               withDockerRegistry([credentialsId: "hibabellaly-dockerhub", url: ""])
               {
                  bat 'docker push hibab/mern-server:latest'
                  bat 'docker push hibab/mern-client:latest'
               }
         } 
      }
    }
   }
  

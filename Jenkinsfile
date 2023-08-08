pipeline {
  agent any
   stages {
    stage('Build') {
      steps {
       sh 'docker build -t hibab/mern-server:latest ./server'

       sh 'docker build -t hibab/mern-client:latest ./client'
        }
   }
    stage('Push') {
     steps{
 script {
      def dockerhubCreds = credentials('hibabellaly-dockerhub')
      withDockerRegistry([credentialsId: dockerhubCreds, url: ""]) {
        sh 'docker push hibab/mern-server:latest'
        sh 'docker push hibab/mern-client:latest'
      }
 }
     }
    
  }
      }

    }
  

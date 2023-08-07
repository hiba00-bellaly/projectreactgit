pipeline {
  agent any
  environment{
    DOCKERHUB_CREDENTIALS = credentials('tokenjenkins')
  }
  
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t hibab/mern-server:latest'

        sh 'docker build -t hibab/mern-client:latest'
        }
   }
   stage('Push') {
     steps{
       sh 'docker push -t hibab/mern-server:latest'

       sh 'docker push -t hibab/mern-client:latest'
     }
    
  }
      }

    }
  }

pipeline {
  agent any
   stages {
        stage('Build') {
          steps {
           bat 'docker build -t hibab/mern-server:latest ./server'
           bat 'docker build -t hibab/mern-client:latest ./client'
            }
         }
stage('Test') {
    steps {
        script {
            def serverTestOutput = bat(script: 'docker run --rm hibab/mern-server:latest npm test', returnStdout: true, returnStatus: true)
            echo "Server Test Output:"
            echo serverTestOutput

            def clientTestOutput = bat(script: 'docker run --rm hibab/mern-client:latest npm test', returnStdout: true, returnStatus: true)
            echo "Client Test Output:"
            echo clientTestOutput

            if (serverTestOutput != 0) {
                error "Server tests failed"
            }

            if (clientTestOutput != 0) {
                error "Client tests failed"
            }
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
  

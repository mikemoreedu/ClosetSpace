pipeline {
    agent none
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
                sh 'npm add expo'
                sh 'npm install -g eas-cli'
            }
        }
        stage('Deliver'){
            steps{
                node{
                    docker.image('node:20.10.0-alpine3.18').withRun('-p 3000:3000'){ c ->
                        sh "chmod +x -R ${env.WORKSPACE}"
                        sh './jenkins/scripts/deliver.sh'
                        input message: 'Finished using the web site? (Click "Proceed" to continue)'
                        sh "chmod +x -R ${env.WORKSPACE}"
                        sh './jenkins/scripts/kill.sh'
                    }
                }
            }
        }
    }
}
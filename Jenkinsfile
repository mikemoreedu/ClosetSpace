pipeline {
    agent any
    stages {
        stage('Start and Build'){
            steps{
                script{
                    node{
                        docker.image('node:20.10.0-alpine3.18').withRun('-p 3000:3000'){ c ->
                            sh 'npm install' 
                            sh 'npm add expo'
                            sh 'npm install -g eas-cli'
                            sh "chmod +x -R ${env.WORKSPACE}"
                            sh './jenkins/scripts/deliver.sh'
                            input message: 'Finished using the web site? (Click "Proceed" to continue)'
                            sh "chmod +x -R ${env.WORKSPACE}"
                            sh './jenkins/scripts/kill.sh'
                        }
                    }
                }\
            }
        }
    }
}
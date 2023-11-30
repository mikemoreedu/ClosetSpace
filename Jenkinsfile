pipeline {
    agent {
        docker {
            image 'node:20.10.0-alpine3.18' 
            args '-p 3000:3000' 
        }
    }
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
                androidEmulator(avdName: 'Emulator', deviceDefinition: '', deviceLocale: '', osVersion: '13.0', screenDensity: '480', screenResolution: 'HVGA', sdCardSize: '', targetABI: '') {
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
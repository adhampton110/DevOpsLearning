pipeline {
    agent any
    tools {
        nodejs "node"
    }
    environment {
        PATH = "/usr/local/bin:${PATH}"
    } 
    stages {
        stage('Checkout') {
            steps {
                echo 'checking out application'
                checkout([$class: 'GitSCM', 
                          branches: '**', 
                          doGenerateSubmoduleConfigurations: false, 
                          extensions: [], 
                          submoduleCfg: [], 
                          userRemoteConfigs: [[url: 'https://github.com/adhampton110/DevOpsLearning.git']]])
            }
        }
        stage('Build') {
            steps {
                sh 'building the application'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo "testing the application"
                sh 'npm test'
            }
        }
    }
}
pipeline {
    agent any
    tools {
        nodejs "node"
    }
    environment {
        PATH = "/usr/local/bin:${PATH}"
    } 
    stages {
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
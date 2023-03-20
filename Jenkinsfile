pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                echo "building the application"
                git url: 'https://github.com/adhampton110/DevOpsLearning.git'
            }
        }
        stage('Test') {
            steps {
                echo "testing the application"
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}
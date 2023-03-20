pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Checkout') {
            steps {
                echo "building the application"
                git branch: '16-configure-jenkins-pipeline', url: 'https://github.com/adhampton110/DevOpsLearning.git'
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
pipeline {
    agent any

    stages {
        stage('Prepare environment') {
            steps {
                sh 'yarn add'
            }
        }
        stage('Test') {
            steps {
                sh 'ng test'
            }
        }
        stage('Build') {
            steps {
                sh 'ng build --prod'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

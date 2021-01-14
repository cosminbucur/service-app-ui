pipeline {
  agent any
  stages {
    stages {
        stage('Prepare env') {
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

    stage('Deploy') {
      steps {
        echo 'Deploying....'
      }
    }

  }
}
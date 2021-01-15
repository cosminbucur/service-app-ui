pipeline {
  agent any

  tools {nodejs "node js"}

  stages {
    stage('Prepare env') {
        steps {
            sh 'npm install'
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
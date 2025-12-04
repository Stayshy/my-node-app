pipeline {
    agent any

    environment {
        DOCKER_HOST = "tcp://dind:2375"
        DOCKER_TLS_CERTDIR = ""
        APP_IMAGE = "my-node-app:latest"
    }

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t $APP_IMAGE .'
            }
        }

        stage('Test') {
            steps {
                sh 'docker run --rm $APP_IMAGE npm test'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                  docker rm -f my-node-app || true
                  docker run -d --name my-node-app -p 3000:3000 $APP_IMAGE
                '''
            }
        }
    }
}

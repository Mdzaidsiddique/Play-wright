pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/Mdzaidsiddique/Play-wright.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Use the name you configured in Global Tool Configuration
                    def nodeJSHome = tool name: 'NodeJS 22', type: 'NodeJS installations'
                    env.PATH = "${nodeJSHome}/bin:${env.PATH}"
                }
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Add your deployment script here
                echo 'Deploying application...'
            }
        }
    }

    post {
        success {
            echo 'Build completed successfully!'
        }
        failure {
            echo 'Build failed.'
        }
    }
}

pipeline{
    agent any
    stages{
        stage('Checkout') {
            steps{
            echo "------------>Checkout<------------"
            checkout scm
        }
        }
        stage('instalar '){
                steps {
                    sh 'npm i'                   
                }
            }
			stage('lint '){
                steps {
                    sh 'npm run lint'                    
                }
            }
         	stage('test '){
                steps {
                    sh 'npm run test'                    
                }
            }
            stage('compilar '){
                steps {
                    sh 'npm i'
                    sh 'npm run build'                    
                }
            }
    }
}
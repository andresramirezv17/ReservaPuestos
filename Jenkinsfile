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
                    sh 'npm run test:coverage'                    
                }
            }
            stage('compilar '){
                steps {
                    sh 'npm i'
                    sh 'npm run build'                    
                }
            }
             stage('Sonar Analysis'){
                 steps{
                     echo '------------>Analisis de código estático<------------'
                       withSonarQubeEnv('Sonar') {
                         sh "${tool name: 'SonarScanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner -Dproject.settings=./sonar-project.properties"
                      }
                 }
             }
    }
}
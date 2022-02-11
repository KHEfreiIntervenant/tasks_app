pipeline {
  environment {
    imagename = "yenigul/hacicenkins"
    registryCredential = 'yenigul-dockerhub'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Building and Running test image') {
      steps{
          sh 'docker-compose up -d --build'
      }
    }

//     stage('Run tests') {
//       steps{
//           sh 'npm test'
//       }
//     }

    // stage('Cleaning after images') {
    //   steps{
    //       sh 'docker-compose down'
    //       sh 'docker rm -f $(docker ps -aq)'
    //   }
    // }
    // stage('Deploy Image') {
    //   steps{
    //     script {
    //       docker.withRegistry( '', registryCredential ) {
    //         dockerImage.push("$BUILD_NUMBER")
    //          dockerImage.push('latest')

    //       }
    //     }
    //   }
    // }
    // stage('Remove Unused docker image') {
    //   steps{
    //     sh "docker rmi $imagename:$BUILD_NUMBER"
    //      sh "docker rmi $imagename:latest"

    //   }
    // }
  }
}

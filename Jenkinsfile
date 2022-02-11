pipeline {
  environment {
    imagename = "yenigul/hacicenkins"
    registryCredential = 'yenigul-dockerhub'
    dockerImage = ''
  }
  agent any
  // agent {
  //       dockerfile {
  //           filename 'Dockerfile'
  //           dir '.'
  //       }
  //   }
  stages {
    stage('Building and Running test image') {
      steps{
          sh 'docker build -p "8081:8081" . -t task_manager_react_app'
          sh 'docker run task_manager_react_app'
          // sh 'docker-compose up -d --build'
          // sh "npm test -- --watchAll=false"
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

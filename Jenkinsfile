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
    stage('Building test image') {
      steps{
          sh 'docker build . -t task_manager_react_app'
      }
    }
    stage('Running test image') {
      steps{
          sh 'docker run -p "8081:8081" task_manager_react_app'
      }
    }
    stage('Release') {
      steps{
          sh 'echo The app is to be released here'
      }
    }
    
    stage('Deploy approval'){
      steps{
        input "Deploy to prod?"
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

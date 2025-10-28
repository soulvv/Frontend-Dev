pipeline {
  agent any
  environment {
    REPO = 'https://github.com/soulvv/Frontend-Dev.git'
    BRANCH = 'html-iframes'
    SOURCE_FILE = 'q5.html'
    DEST = '/var/www/html/index.html'
  }
  stages {
    stage('Prepare') {
      steps {
        echo "Running on node: ${env.NODE_NAME}"
        sh 'uname -a'
        sh 'ls -la'
      }
    }
    stage('Checkout') {
      steps {
        echo "Checking out ${env.REPO} : ${env.BRANCH}"
        checkout([$class: 'GitSCM', branches: [[name: "*/${env.BRANCH}"]],
                  userRemoteConfigs: [[url: env.REPO]]])
      }
    }
    stage('Install Apache (if missing)') {
      steps {
        // Update package lists and ensure apache2 is installed
        sh '''
          if ! command -v apache2 >/dev/null 2>&1; then
            sudo apt-get update -y
            sudo apt-get install -y apache2
            sudo systemctl enable --now apache2
          fi
        '''
      }
    }
    stage('Deploy q5.html to default page') {
      steps {
        // Deploy q5.html to /var/www/html/index.html
        // Use raw file from checked-out repo if present
        sh '''
          if [ -f "${WORKSPACE}/${SOURCE_FILE}" ]; then
            echo "Found file in workspace, copying..."
            sudo cp "${WORKSPACE}/${SOURCE_FILE}" "${DEST}"
          else
            echo "File not in workspace; attempt raw GitHub raw copy"
            sudo curl -s -o "${DEST}" "https://raw.githubusercontent.com/soulvv/Frontend-Dev/html-iframes/q5.html"
          fi
          sudo chown root:www-data "${DEST}"
          sudo chmod 644 "${DEST}"
          # restart apache to ensure changes are live
          sudo systemctl restart apache2 || true
          echo "Deployed to ${DEST}"
        '''
      }
    }
    stage('Verify') {
      steps {
        sh 'curl -I http://localhost || true'
      }
    }
  }
  post {
    success {
      echo "Deployment completed successfully."
    }
    failure {
      echo "Deployment failed. Check console output."
    }
  }
}

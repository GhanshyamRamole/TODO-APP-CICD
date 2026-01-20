terraform {
  backend "s3" {
    bucket       = "jenkins-bucket-e2e" 
    region       = "us-west-1"
    key          = "DevOps/jenkins-server/terraform.tfstate"
    encrypt      = true
    
    # updated WAY configure backend:
    use_lockfile = true             
    # dynamodb_table = "Lock-Files"  
  }

  required_version = ">= 1.10.0"    
  
  required_providers {
    aws = {
      version = ">= 2.7.0"
      source  = "hashicorp/aws"
    }
  }
}

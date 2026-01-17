data "aws_ami" "ami" {
  most_recent = true

  filter {
    name   = "name"
   
    values = ["ubuntu/images/hvm-ssd/ubuntu-noble-24.04-amd64-server-*"]
  }

  owners = ["337909737467"]
}

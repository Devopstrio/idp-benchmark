resource "aws_db_instance" "benchmark_db" {
  identifier           = "idp-benchmark-db"
  allocated_storage    = 100
  storage_type         = "gp3"
  engine               = "postgres"
  engine_version       = "15.3"
  instance_class       = "db.m6i.large"
  name                 = "idp_benchmarks"
  username             = var.db_user
  password             = var.db_password
  parameter_group_name = "default.postgres15"
  skip_final_snapshot  = true
  multi_az             = true

  vpc_security_group_ids = [var.db_security_group]
  db_subnet_group_name   = var.db_subnet_group
}

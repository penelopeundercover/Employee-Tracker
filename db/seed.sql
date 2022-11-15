USE employees_db;

INSERT INTO department
(department_name)
VALUES
("Earthworks"), 
("Estimating"),
("Building Construction");

INSERT INTO role
(title, salary, department_id)
VALUES
("Lead Operator", 10000.50, 1),
("Estimator", 10000.50, 2),
("Apprentice Carpenter", 10000.50, 3);

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
("Harold", "Peabody", 1, null),
("Marianne", "Seiwert", 1, 1),
("Lucy", "Sanchez", 2, 1);
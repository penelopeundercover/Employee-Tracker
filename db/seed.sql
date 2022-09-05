USE employees_db;
INSERT INTO department
(name)
VALUES
("Earthworks"), 
("Estimating"),
("Building");
INSERT INTO role
(title, salary, department_id)
VALUES
("Lead Operator", 10000.50, 1),
("Estimator", 10000.50, 2);
INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
("John", "Doe", 1, null),
("Marianne", "Seiwert", 1, 1),
("Lucy", "Sanchez", 2, 1);
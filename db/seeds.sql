  INSERT INTO department (dept_name, dept_id)
  VALUES
  ('Executive', 01),
  ('Legal', 02),
  ('Finance', 03),
  ('HR', 04),
  ('Marketing', 05),
  ('IT', 06);

  INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES
  ('Donald', 'Jameson', 1, 1),
  ('Spencer', 'Franks', 3, 2),
  ('Oren', 'Miller', 4, 1),
  ('Betty', 'Sharpe', 1, 1),
  ('Alexander', 'Smitts', 3, 1),
  ('Jennifer', 'Cody', 4, 2),
  ('Edward', 'Potts', 2, 1),
  ('Robin', 'Steward', 3, 3),
  ('Alan', 'Jeong', 4, 1),
  ('Elizabeth', 'Hemsworth', 1, 4),
  ('Ruby', 'Orville', 3, 4),
  ('Hannah', 'McGill', 2, 1);

  INSERT INTO roles (job_title, role_id, role_dept, role_salary)
  VALUES
  ('CEO', 0100, 'Executive', 800000),
  ('Executive Assistant', 0120, 'Executive', 80000),
  ('General Counsel', 0210, 'Legal', 400000),
  ('Paralegal', 0220, 'Legal', 90000),
  ('Accounts Payable', 0310, 'Finance', 60000),
  ('HR Manager', 0410, 'HR', 100000),
  ('Sales Manager', 0520, 'Sales', 100000),
  ('Engineer', 0630, 'IT', 120000);







  



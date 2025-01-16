package gm.hr.service;

import gm.hr.model.Employee;

import java.util.List;

public interface IEmployeeService {
    public List<Employee> listEmployees();

    public Employee getEmployeeById(Integer id);

    public Employee saveEmployee(Employee employee);

    public void deleteEmployee(Employee employee);
}

package gm.hr.controller;

import gm.hr.exception.ResourceNotFoundException;
import gm.hr.model.Employee;
import gm.hr.service.EmployeeService;
import gm.hr.service.IEmployeeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
// http://host/rh-app
@RequestMapping("rh-app")
@CrossOrigin(value = "http://localhost:5173")
public class EmployeeController {
    private static final Logger logger = LoggerFactory.getLogger(EmployeeController.class);

    private final IEmployeeService employeeService;
    // CONSTRUCTOR
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    // GET [http://{host}/rh-app/employees]
    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        var employees = employeeService.listEmployees();
        employees.forEach(System.out::println);
        return employees;
    }

    // POST [http://{host}/rh-app/employees]
    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee employee) {
        logger.info("Adding employee " + employee);
        return employeeService.saveEmployee(employee);
    }

    // GET [http://{host}/rh-app/employees/?id]
    @GetMapping("employees/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable Integer id) {
        Employee employee = employeeService.getEmployeeById(id);
        if (employee == null)
            throw new ResourceNotFoundException("Employee with id " + id + " not found");
        return ResponseEntity.ok(employee);
    }

    //PUT [http://{host}/rh-app/employees/?id]
    @PutMapping("employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Integer id, @RequestBody Employee employeeReceived) {
        Employee employee = employeeService.getEmployeeById(id);
        if (employee == null)
            throw new ResourceNotFoundException("Employee with id " + id + " not found");
        employee.setName(employeeReceived.getName());
        employee.setDepartment(employeeReceived.getDepartment());
        employee.setSalary(employeeReceived.getSalary());
        employeeService.saveEmployee(employee);
        return ResponseEntity.ok(employee);
    }
}




















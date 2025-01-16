package gm.hr.controller;

import gm.hr.model.Employee;
import gm.hr.service.EmployeeService;
import gm.hr.service.IEmployeeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
}




















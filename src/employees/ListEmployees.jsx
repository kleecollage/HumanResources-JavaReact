import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";

export default function ListEmployees() {

  const baseUrl = 'http://localhost:8080/rh-app/employees';
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const {data} = await axios.get(baseUrl);
    console.log("Result load employees");
    console.log(data);
    setEmployees(data)
  }


  return (
		<>
			<div className='container'>
				<div className='container text-center' style={{ margin: '30px' }}>
					<h3>Human Resources System</h3>
				</div>
				<table className='table table-hover table-striped align-middle'>
					<thead className='table-dark'>
						<tr>
							<th scope='col'>ID</th>
							<th scope='col'>Employee</th>
							<th scope='col'>Department</th>
							<th scope='col'>Salary</th>
							<th scope='col'></th>
						</tr>
					</thead>
					<tbody>
						{
							// ITERATE EMPLOYEE ARRAY
							employees.map((employee, index) => (
								<tr key={index}>
									<th scope='row'>{employee.idEmployee}</th>
									<td>{employee.name}</td>
									<td>{employee.department}</td>
									<td>
										<NumericFormat
											value={employee.salary}
											displayType={'text'}
											thousandSeparator=','
											prefix={'$'}
                      decimalScale={2}
                      fixedDecimalScale
										/>
									</td>
									<td className="text-center">
										<div>
											<Link to={`/edit/${employee.idEmployee}`} className="btn btn-warning btn-sm me-3">
												Edit</Link>
										</div>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		</>
	);
}

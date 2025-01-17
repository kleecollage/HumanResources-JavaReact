import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditEmployee() {
  const navigate = useNavigate();
  const baseUrl = 'http://localhost:8080/rh-app/employees';
  const {id} = useParams();

  const [employee, setEmployee] = useState({
    name: '',
    department: '',
    salary: ''
  })

  const onInputChange = (e) => {
    setEmployee({...employee, [e.target.name]: e.target.value})
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${baseUrl}/${id}`, employee);
    navigate('/');
  }

  const{name, department, salary} = employee;

  useEffect(() => {
    const loadEmployee = async () => {
      const { data } = await axios.get(`${baseUrl}/${id}`);
      setEmployee(data);
    };
    loadEmployee();
  }, [id]);

  
  return (
    <div className="container">
      <div className="container text-center" style={{margin: "30px"}}>
        <h3>Edit Employee</h3>
      </div>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required={true}
            value={name}
            onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="department" className="form-label">Department</label>
          <input
            type="text"
            className="form-control"
            id="department"
            name="department"
            value={department}
            onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="salary" className="form-label">Salary</label>
          <input
            type="number"
            step="any"
            className="form-control"
            id="salary"
            name="salary"
            value={salary}
            onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-success btn-sm me-3">Submit</button>
          <Link className="btn btn-primary btn-sm" to="/">Go Back</Link>
        </div>
      </form>
    </div>
  )
}

import { Link } from "react-router-dom";

export default function AddEmployee() {
  return (
    <div className="container">
      <div className="container text-center" style={{margin: "30px;"}}>
        <h3>Add New Employee</h3>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="department" className="form-label">Department</label>
          <input type="text" className="form-control" id="department" name="department" />
        </div>
        <div className="mb-3">
          <label htmlFor="salary" className="form-label">Salary</label>
          <input type="number" step="any" className="form-control" id="salary" name="salary" />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-success btn-sm me-3">Submit</button>
          <Link className="btn btn-primary btn-sm" to="/">Go Back</Link>
        </div>
      </form>
    </div>
  )
}

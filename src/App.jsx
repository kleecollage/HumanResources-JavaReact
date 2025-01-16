import { BrowserRouter, Route, Routes } from "react-router-dom"
import ListEmployees from "./employees/ListEmployees"
import Navigation from "./layout/Navigation"
import AddEmployee from "./employees/AddEmployee"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<ListEmployees />} />
          <Route exact path="/add" element={<AddEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

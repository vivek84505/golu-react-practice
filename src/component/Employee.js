import { useEffect, useState } from "react";
import api from "./services/api";


function Employee() {

    // Data Binding 
    //  => One way Data binding
    //  =>  Two way Data binding
    // Controled Component
    // Form handling + Validation
  const [employees,setEmployees] = useState([])  

  const [formData,setFormData] = useState({
    employee_code: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    designation: "",
    department: "",
    date_of_joining:"", 
    salary: ""  
  })   // State variable

  const [errors,setErros] = useState({}) // State variable
  const [submittedData,setSubmittedData] = useState(null)  // State variable  
  
  useEffect(()=>{
     getEmployees();
  },[])

   

  const getEmployees = async () => {

    const response = await api.get("/api/employees")
    console.log("Get API response======>",response)
    setEmployees(response.data)

  }

  const handleChange = (e) =>{ 
    
    
    const {name,value} = e.target //1000
 
        setFormData((prevData) => (
            {...prevData,[name]:value }
        )
    )
  }
   
  const validateForm = () =>{

        let newErros = {}
        console.log("newErros before=======>",newErros)
        // To decide if an array or object is emtpy or not we use lenght. if length is 0 then array/object is empty. 


        // validatiing form elements using formdaData
        if(!formData.employee_code.trim()){
            newErros.employee_code = "employee code is required"
        }


        if(!formData.first_name.trim()){
        newErros.first_name = "first_name code is required"
        }

        if(!formData.last_name.trim()){
        newErros.last_name = "last_name code is required"
        }

        if(!formData.designation.trim()){
        newErros.designation = "designation code is required"
        }

        
        if(!formData.department.trim()){
        newErros.department = "department code is required"
        }

        if(!formData.salary.trim()){
        newErros.salary = "salary code is required"
        }





        // here we are checking if value is blank or not + we need to check if the value is valid Email or not
        let emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        
        if(!formData.email.trim()){
            newErros.email = "Email is required"
        }
        else if(!emailRegExp.test(formData.email)){
             newErros.email = "Invalid Email"
        }


         // here we are checking if value is blank or not + we need to check if the value is valid Mobile or not
        //let mobileRegExp = ^[789]\d{9}$

        let mobileRegExp = /^(\+91|\+91\-|0)?[789]\d{9}$/
        if(!formData.phone.trim()){
            newErros.phone = "Mobile is required"
        }
        else if(!mobileRegExp.test(formData.phone)){
            newErros.phone = "Invalid phone"
        }

        console.log("newErros after=======>",newErros)

        setErros(newErros) // Adding error data into state errors object
 

        return Object.keys(newErros).length === 0
         

  }


  const handleSubmit = async (e) => {
    
     e.preventDefault();
     
     if(validateForm()){ 
       // setSubmittedData(formData)
        console.log("Employee submitted formdata=======>",formData)
        // formData.id = Math.floor(Math.random()  * 100) + 1

          //  const response = await api.post("/posts",{
          //           userId: Number(formData.userId),    
          //           title:  formData.title,
          //           body: formData.body
          //       });

          const response = await api.post("/api/employees",formData)

          if( response.status === 201 ){
              alert('Employee Added sucessfully')     
              getEmployees()    
          }  
          else{
             alert('Something went wrong!')
          }

        // setEmployees([...employees,formData])


        
     }
     else{
        //setSubmittedData(null)
     }
    

     
   

    // Goint to call API once the form is validated
         //console.log("Form Validated Submitting data to API=======>")
  }
 

//   console.log("formData========>",formData)
 
  return (
    <div className="container mt-4">
      <h2>Employee Form</h2>
 

      <form method="POST"  onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group mb-3">
              <label htmlFor="name">Employee Name</label>
              <input
                type="text"
                className="form-control"
                id="employee_code"
                
                name="employee_code"
                placeholder="Employee code"
                value={formData.employee_code}
                onChange={handleChange}
              />
              <small className="text-danger">{errors.employee_code}</small>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group mb-3">
              <label htmlFor="first_name">first name</label>
              <input
                type="text"
                className="form-control"
                id="first_name"
                placeholder="Enter Email"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
              />
               <small className="text-danger">{errors.first_name}</small>
            </div>
          </div>


          <div className="col-md-4">
            <div className="form-group mb-3">
              <label htmlFor="last_name">Last name</label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                placeholder="Enter Email"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
               <small className="text-danger">{errors.last_name}</small>
            </div>
          </div>

           <div className="col-md-4">
            <div className="form-group mb-3">
              <label htmlFor="email">email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
               <small className="text-danger">{errors.email}</small>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group mb-3">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter Mobile Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
               <small className="text-danger">{errors.phone}</small>
            </div>
          </div>

        <div className="col-md-4">
            <div className="form-group mb-3">
              <label htmlFor="designation">designation</label>
              <input
                type="text"
                className="form-control"
                id="designation"
                placeholder="Enter designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
              />
               <small className="text-danger">{errors.designation}</small>
            </div>

            </div>
        
 <div className="col-md-4">
             <div className="form-group mb-3">
              <label htmlFor="department">department</label>
              <input
                type="text"
                className="form-control"
                id="department"
                placeholder="Enter department"
                name="department"
                value={formData.department}
                onChange={handleChange}
              />
               <small className="text-danger">{errors.department}</small>
            </div>
</div>


 <div className="col-md-4">
             <div className="form-group mb-3">
              <label htmlFor="salary">salary</label>
              <input
                type="text"
                className="form-control"
                id="salary"
                placeholder="Enter salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
              />
               <small className="text-danger">{errors.salary}</small>
            </div>
          </div>

          
 <div className="col-md-4">
             <div className="form-group mb-3">
              <label htmlFor="salary">date_of_joining</label>
              <input
                type="date"
                className="form-control"
                id="date_of_joining"
                placeholder="Enter date_of_joining"
                name="date_of_joining"
                value={formData.date_of_joining}
                onChange={handleChange}
              />
               <small className="text-danger">{errors.date_of_joining}</small>
            </div>
          </div>



        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

      </form>

        {submittedData && (
             <div className="card mt-4 p-3">
                <h4>Submitted Data</h4>
                <p>
                    <strong>Name:</strong> {submittedData.name}
                </p>
                <p>
                    <strong>Email:</strong> {submittedData.email}
                </p>

                <p>
                    <strong>Mobile:</strong> {submittedData.mobile}
                </p>
            </div>
        )}

        {/* user table */}
        <div>
          <h2> CUserList Demo</h2>

              <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Employee id</th>
                    <th scope="col">Employee code</th>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Department</th>
                     
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee)=>(
                            <tr key={employee.employee_id}>
                                <th scope="row">{employee.employee_id}</th>
                                <td>{employee.employee_code}</td>
                                <td>{employee.first_name} {employee.last_name}</td>
                                <td>{employee.email}</td>
                                 <td>{employee.phone}</td>
                                   <td>{employee.designation}</td>
                                    <td>{employee.department}</td>
                                 
                            </tr>
                    ))} 

                </tbody>
                </table>

        </div>
    </div>
  );
}

export default Employee;
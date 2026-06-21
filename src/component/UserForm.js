import { useState } from "react";

function UserForm() {

    // Data Binding 
    //  => One way Data binding
    //  =>  Two way Data binding
    // Controled Component
    // Form handling + Validation
    
  const [formData,setFormData] = useState({
    name:"vivek D",
    email:"vivek@gmail.com",
    mobile:"9403384505"
  })  
  

 

  const handleChange = (e) =>{ 
    
 
    const {name,value} = e.target //1000
 
        setFormData((prevData) => (
            {...prevData,[name]:value }
        )
    )
  }
   
 

  console.log("formData========>",formData)
 
  return (
    <div className="container mt-4">
      <h2>User Form</h2>
 

      <form>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group mb-3">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter Full Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group mb-3">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                className="form-control"
                id="mobile"
                placeholder="Enter Mobile Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;
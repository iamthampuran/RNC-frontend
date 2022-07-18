import React, { useState } from 'react'
import './forms.css';
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";

//funded prject

function Form1() {

  const [data3, setData3] = useState({
		
		title: "",
    year: "",
		agency: "",
		name: "",
    GoP: "",
		amount: ""
	});
  
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData3({ ...data3, [input.name]: input.value });
	};

	const handleSub = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/addFP";
			const { data: res } = await axios.post(url, data3);
			navigate("/");
			console.log(res.message);
            alert(res.message)
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
        
				setError(error.response.data.message);
        console.log(error.response.data.message)
        alert(error.response.data.message) //PRINTING EROR
			}
		}
	};

  const q=()=>{
    navigate('/home',{replace:true}) 
    
 }

  return (
    
    <div className="signupParentDiv">
    <h3 >enter the details of approved projects only..!</h3>
      <form >
        <label>year</label>
        <br />
        <input style={{ width:"500px" }}
          className="input"
          type="number"
          //id="fname"
          //name="name"
          placeholder="Enter the year"
         // value={year}
          name="year"
          onChange={handleChange}
          value={data3.year}
          required

            //onChange={(e)=>setYear(e.target.value)}
          
        />
        <br />
        <label htmlFor="fname">Project Title</label>
        <br />
        <input
         style={{ width:"500px" }}
          className="input"
          type="text"
          id="fname"
          //name="email"
          placeholder="Enter the project title"
          name="title"
          onChange={handleChange}
          value={data3.title}
          required
          //value={title}
           // onChange={(e)=>setTitle(e.target.value)}
          
        />
        <br />
        <label htmlFor="lname">Name of PI / Co-PI</label>
        <br />
        <input
         style={{ width:"500px" }}
          className="input"
          type="text"
          //id="lname"
          //name="phone"
          placeholder="enter name of PI / Co-PI"
          name="name"
          onChange={handleChange}
          value={data3.name}
          required

          
        />
         <br />
        <label htmlFor="lname">Agency</label>
        <br />
        <input
          style={{ width:"500px" }}
          className="input"
          type="text"
          //id="lname"
          //name="phone"
          placeholder="enter the agency"
          name="agency"
              onChange={handleChange}
              value={data3.agency}
              required
        />
         <br />
        <label htmlFor="lname">Govt / Private</label>
        <br />
        <input
          style={{ width:"500px" }}
          className="input"
          type="text"
          //id="lname"
          //name="phone"
          placeholder="enter govt or private"
          name="GoP"
              onChange={handleChange}
              value={data3.GoP}
              required
        />
         <br />
        <label htmlFor="lname">Amount</label>
        <br />
        <input
          style={{ width:"500px" }}
          className="input"
          type="number"
          //id="lname"
          //name="phone"
          placeholder="enter the amount in Rupees"
          name="amount"
              onChange={handleChange}
              value={data3.amount}
              required  />
        
        <br />
        <br />
        <button  onClick={handleSub}>Submit</button>
        <br /><br />
        <button  onClick={q}>Cancel</button>
      
      </form>
    </div>

  )
}

export default Form1



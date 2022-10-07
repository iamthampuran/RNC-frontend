import React, { useState } from 'react'

import axios from "axios"
import { Link, useNavigate } from "react-router-dom";


function AddD() {
    const [data2, setData2] = useState({
		
		Year: 0,
    Title:"",
    Faculties:"",
    Type:"",
    SubType:"",
    Name:"",
    Details:"",
    ImpactFactor:"",
    Affiliated: "",
    Branch:""
	});
  
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData2({ ...data2, [input.name]: input.value });
    console.log(data2)
	};

  
  const q=()=>{
    navigate('/home',{replace:true}) 
    
 }
	const handleSub = async (e) => {
		e.preventDefault();
		try {
			const url = "https://rnc2.herokuapp.com/RNC/add";
			const { data: res } = await axios.post(url, data2);
			navigate("/home");
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


    return (
    
        <div className="signupParentDiv">
        <h3 >Enter the details of published papers only..!!</h3>
          <form >
            <label>Year</label>
            <br />
            <input style={{ width:"500px" }}
              className="input"
              type="Number"
              //id="fname"
              //name="name"
              placeholder="Year"
              name="Year"
              onChange={handleChange}
              value={data2.Year}
              required
            />
            <br />
            <label htmlFor="fname"> Title </label>
            <br />
            <input
             style={{ width:"500px" }}
              className="input"
              type="text"
              id="fname"
              //name="email"
              placeholder="Enter the title in capital letter"
              name="Title"
              onChange={handleChange}
              value={data2.Title}
              required
            />
            <br />
            <label htmlFor="lname">Faculties</label>
            <br />
            <input
             style={{ width:"500px" }}
              className="input"
              type="text"
              //id="lname"
              //name="phone"
              placeholder="enter name of authors seperated by coma"
              name="Faculties"
              onChange={handleChange}
              value={data2.Faculties}
              required
              
            />
             <br />
            <label htmlFor="lname">Type(journel/conference/publisher of book)</label>
            <br />
            <input
              style={{ width:"500px" }}
              className="input"
              type="text"
              //id="lname"
              //name="phone"
              placeholder="enter"
              name="Type"
              onChange={handleChange}
              value={data2.Type}
              required
            />
            <br/>
            <label htmlFor="lname">SubType(SCI/SCOPUS/National/International/Other)</label>
            <br />
            <input
              style={{ width:"500px" }}
              className="input"
              type="text"
              //id="lname"
              //name="phone"
              placeholder="enter"
              name="SubType"
              onChange={handleChange}
              value={data2.SubType}
              required
            />

<br/>
            <label htmlFor="lname">Name of publication</label>
            <br />
            <input
              style={{ width:"500px" }}
              className="input"
              type="text"
              //id="lname"
              //name="phone"
              placeholder="enter"
              name="Name"
              onChange={handleChange}
              value={data2.Name}
              required
            />


             <br />
            <label htmlFor="lname">publication Details (volume,issue,pages) or DOI</label>
            <br />
            <input
              style={{ width:"500px" }}
              className="input"
              type="text"
              //id="lname"
              //name="phone"
              placeholder="enter publication Details "
              name="Details"
              onChange={handleChange}
              value={data2.Details}
              required
            />
             <br />
            <label htmlFor="lname">Details of indexing and impact factor</label>
            <br />
            <input
              style={{ width:"500px" }}
              className="input"
              type="Text"
              //id="lname"
              //name="phone"
              placeholder="enter details"
              name="ImpactFactor"
              onChange={handleChange}
              value={data2.ImpactFactor}
              required
              />
            <br />
            <label htmlFor="lname">MITS affiliated</label>
            <br />
            <select
            style={{width:"500px"}} className= "input" name='Affiliated' onChange={handleChange} value = {data2.Affiliated} required>
              <option value=''>Yes/No</option>
              <option value = "Yes">Yes</option>
              <option value = "No">No</option>
            </select>
          
            <br />
            <label htmlFor="lname">Branch</label>
            <br />
            <select
            style={{width:"500px"}} className= "input" name='Branch' onChange={handleChange} value = {data2.Branch} required>
              <option value = ''>Choose the Branch</option>
              <option value = "CSE">CSE</option>
              <option value = "EEE">EEE</option>
              <option value = "CE">CE</option>
              <option value = "ME">ME</option>
              <option value = "ECE">ECE</option>
            </select>

            <br/>
            <br />
            
            <button  onClick={handleSub}>Submit</button>
            <br /><br />
            <button onClick={q}>Cancel</button>
          
          </form>
        </div>
    
      )
    }
    
    export default AddD
    
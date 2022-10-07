import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./Search.css"
import { useState } from 'react'
import axios from "axios";
import Table from './Table'
import "./style.css"


function ShowFee() {
  const navigate = useNavigate()
const [listOfUsers, setListOfUsers] = useState([]);
const [data4, setData4] = useState([])
const [name1,setName1]=useState("title")
const [error, setError] = useState("");
const cols = [
    {title: 'Student Names', field: 'studentnames'},
  { title: 'Name', field: 'name' },
  { title: 'Fee Spent', field: 'totalfee' },
  { title: 'Year', field: 'year'},
 // { title: 'Journal Name', field: 'nameJ' }
]
console.log(1)

// const handleSub=(e)=>{
//     e.preventDefault()
//     console.log(search)
// }

// }
const handleChange = ({ currentTarget: input }) => {
    //console.log("ghjk"+name1)
    setData4({ [input.name]: input.value });
};

// const title="Mongto"  ###########can be used
const handleS = async (e) => {
    e.preventDefault()
    // try {
        
        axios.get("https://rnc2.herokuapp.com/RNC/getAll").then((response) => {
            setListOfUsers(response.data.data);

            console.log(listOfUsers)
            //alert(response.data.message)
           // print_all()                     //all publications retreival
           
          });}
          const q=()=>{
            navigate('/home',{replace:true}) 
            }
const print_all = () => {
  
  for(let i=0;i<5;i++)
  {
    console.log(listOfUsers[i].Title)
  }
}
 const handleSq= async (e) => {
            e.preventDefault()
             try {
        const url = "https://rnc2.herokuapp.com/RNC/getAll";
        //const { data: res } = await axios.post(url, {title : title})  ### must be post 
        axios.post(url, data4).then((response) => {
            setListOfUsers(response.data.data);
            console.log(listOfUsers)                //required ones
          })
        //navigate("/sign-in")
        //console.log(res.message)
    
    } catch (error) {
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            setError(error.response.data.message)
        }
    }}
    
    function handleSChange(e) {
        setName1(e.target.value);
        console.log("--"+name1)
      }

    return (
<div className='search'>
<h1>&nbsp;&nbsp;&nbsp;searching </h1>
<form>
<label>
    &nbsp;&nbsp; view all details of Fee Reimbursement
    </label>&nbsp;&nbsp;&nbsp;
    <button onClick={handleS}>View all</button>&nbsp;&nbsp;&nbsp;&nbsp;
     <button onClick={q}>Home</button>
{/* 
            <br/>
<br/>
<label>
     Choose field to be search
    </label>&nbsp;&nbsp;&nbsp;
   
    
  <select onChange={handleSChange}>
      <option value="title">Title</option>
      <option value="year">Year</option>
  
     </select>
     <br/>
     <br/>
     <label>
     Enter {name1} to search
    </label>&nbsp;&nbsp;
    <input style={{ width:"500px" }}
              className="input"
              type="text"
              id="fname"
              name={name1}
           
            onChange={handleChange}
            value={data4.title}
            
            
              required
            />&nbsp;&nbsp;
            
    <button onClick={handleSq}>search</button>
     */}
</form>
<br/>
<br/>
<br/>

{/* {listOfUsers
.sort( (a,b)=> a.Title.localeCompare(b.Title) )
.map((user) => {
          return (
            <div><br/>
                
                &nbsp; &nbsp;
                <h6>Title: {user.Title}&nbsp;&nbsp;
             Author: {user.Faculties}&nbsp;&nbsp;
              Date: {user.DateOfApproval}</h6>
            
            </div>
          );
        })}  */}
        <div class="container"><Table col={cols} data={listOfUsers} action ={"Fees"} /></div>
        
<br/></div>
    )
    }

    
    export default ShowFee
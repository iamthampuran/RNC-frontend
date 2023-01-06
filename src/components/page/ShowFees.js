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
        
        axios.get("http://34.100.147.79:3001/RNC/getAll").then((response) => {
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
        const url = "http://34.100.147.79:3001/RNC/getAll";
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
<div className='search1'>
<br/>
<h1 className='search'>Details of Fee Reimbursed</h1><br/>
<form>
<label>
   <h4>Click to view all the details</h4>
    </label><br></br>
    <button className="btn21 button21" onClick={handleS}>View all</button>&nbsp;
     <button className="btn21 button22" onClick={q}>Home</button>

</form>



        <div class="container"><Table col={cols} data={listOfUsers} title_name ={"Fee Details"} /></div>
        
<br/></div>
    )
    }

    
    export default ShowFee
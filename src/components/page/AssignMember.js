import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./Search.css"
import { useState } from 'react'
import axios from "axios";
import Table from './Table'
import "./style.css"


function AssignMember() {
  const navigate = useNavigate()
const [listOfUsers, setListOfUsers] = useState([]);
const [data4, setData4] = useState([])
const [name1,setName1]=useState("title")
const [error, setError] = useState("");
const cols = [
  { title: 'Name', field: 'name' },
  { title: 'Branch', field: 'branch' },
  { title: 'Role', field: 'type', type: 'Text' },
 // { title: 'Journal Name', field: 'nameJ' }
]

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
        
        axios.get("https://rnc2.herokuapp.com/RNC/getFaculties").then((response) => {
            setListOfUsers(response.data.data);
            console.log(listOfUsers)
            //alert(response.data.message)
           // print_all()                     //all publications retreival
           
          });}
const print_all = () => {
  
  for(let i=0;i<5;i++)
  {
    console.log(listOfUsers[i].Title)
  }
}
const q=()=>{
  navigate('/home',{replace:true}) 
  }

 const handleSq= async (e) => {
            e.preventDefault()
             try {
        const url = "https://rnc2.herokuapp.com/RNC/getFaculties";
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
<div className='search1'><br/>
<h1 className='search'>Assign Members </h1><br/>
<form>
<h5 >
    Click to view the details of Faculties
    </h5> 
    <button className="btn21 button21" onClick={handleS}>View all</button>&nbsp;
    <button className="btn21 button22" onClick={q}>Home</button>

</form>
        <div class="container">
          <Table
            title_name={"Faculties"}
         col={cols} data={listOfUsers} buttonname ={"Assign"} 
        event = {"https://rnc2.herokuapp.com/RNC/assignmember"} action = {"Member"}
       />
        </div>
        
<br/></div>
    )
    }

    
    export default AssignMember
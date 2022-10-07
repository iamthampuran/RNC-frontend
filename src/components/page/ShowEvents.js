import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./Search.css"
import { useState } from 'react'
import axios from "axios";
import MaterialTable from 'material-table';
import './Table.css';
import "./style.css"


function ShowEvents() {
  const navigate = useNavigate()
const [listOfUsers, setListOfUsers] = useState([]);
const [data4, setData4] = useState([])
const [name1,setName1]=useState("title")
const [error, setError] = useState("");
const cols = [
    {title: 'Venue', field: 'venue'},
  { title: 'Event Name', field: 'eventN' },
  { title: 'Date', field: 'date' },
  { title: 'Time', field: 'time'},
  { title: 'Organised by', field: 'org'},
 // { title: "Source", field: 'source'}
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
        
        axios.get("https://rnc2.herokuapp.com/RNC/getEvents").then((response) => {
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
        const url = "https://rnc2.herokuapp.com/RNC/getEvents";
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
    &nbsp;&nbsp; view all details of Events
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
          <div class="container"><Table col={cols} data={listOfUsers} action ={"Events"} buttonname = {"View"} /></div> //put outside all brackets before closing div
        })}  */}

        
        <MaterialTable

options={{
  exportButton: {
      paging:true,
      csv: true,
      pdf:true,
      
  },   
  headerStyle: {
    backgroundColor: '#01579b',
    color: '#FFF'
  },
  paging:true,
  pageSize:100,       // make initial page size
  emptyRowsWhenPaging: false,   // To avoid of having empty rows
  pageSizeOptions:[5,10,20,50,100,200,500],
}}
localization={{
  toolbar: {
    exportCSVName: "Export as Excel format",
    exportPDFName: "Export as pdf!!"
  }
}}    

  
  actions={[
    {
       
      icon:()=><button className='member'><h6>View</h6></button>,
      tooltip: 'View the photos',
      onClick: (event, rowData) => {
        event.preventDefault()
              const  id=rowData._id
       // const url = "http://localhost:3001/RNC/verified";   
        //const { data: res } = await axios.post(url, {title : title})  ### must be post 
        /*axios.post(url, {"Title": rowData.Title,"Confirm": "Yes"}).then((response) => {

            console.log("aproving :"+rowData.Title) 
            alert(response.data.message)               //required ones
          })*/
        window.open(rowData.source)
       console.log(rowData.Title)
      }
    }
  ]}
  data ={listOfUsers}
  columns = {cols}
  />
</div>
    )
    }

    
    export default ShowEvents
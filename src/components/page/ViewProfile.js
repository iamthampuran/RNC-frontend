import React, { useState } from 'react'
//rcfe
import axios from "axios";
import MaterialTable from 'material-table';
import { useNavigate } from "react-router-dom";


function ViewProfile() {
    const navigate = useNavigate();
    const [choose,setChoose]=useState("approved")
    const [listOfUsers, setListOfUsers] = useState([]);
    function handleSChange(e) {
        setChoose(e.target.value);
        //console.log("--"+choose)
      }
    const name=localStorage.name //localStorage.name;
    const branch=localStorage.branch //localStorage.branch;

    const columns1=[
        { title: 'Title', field: 'Title' },
        { title: 'Author', field: 'Faculties' },
        { title: 'Year', field: 'Year' },
        { title: 'Journal Name', field: 'Name' }
      ]
      
      const data1=[{title: 'Mehmet', author: 'Baran',year: 1987, nameJ: 'rghj'},
                             {title: 'wertt', author: 'Baryytran',year: 2987, nameJ: 'rplmjd'}
                  ]
                  const q=()=>{
                    navigate('/home',{replace:true}) 
                    }
                
    const handleSq= async (e) => {
        if(choose==="approved")
        {
            console.log("APPROVED ")

            e.preventDefault()
       const url = "https://rnc2.herokuapp.com/RNC/viewprofileapp"; //url to fetch details from permanent table
       //const { data: res } = await axios.post(url, {title : title})  ### must be post 
       axios.post(url,{name:name,branch:branch}).then((response) => {
           setListOfUsers(response.data.data);
           console.log(response.data)                //required ones
         })
        }
        else if(choose==="rejected"){
            console.log("REJECTED...!")
            e.preventDefault()
            const url = "https://rnc2.herokuapp.com/RNC/viewprofilereject"; //url to fetch details from rejected table
           // const { data: res } = await axios.post(url, {title : title})  // must be post 
            axios.post(url,{name:name,branch:branch}).then((response) => {
                console.log(response.data)
                setListOfUsers(response.data.removed);
                alert(response.data.message)
            //    console.log(setListOfUsers) 
            })
        } 
}

//     console.log(title)
// const qw =(e) => {
//     e.preventDefault()
//     console.log("sdcvhnm,")
//     //location.href = 'http://www.google.com';
//     const url ='https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q='  +{title}+ '&btnG='
//     window.open(url);}
  return (
<div className='search'>
    
<h1>&nbsp;&nbsp;&nbsp;WELOCME FACULTY</h1>
<h5>Name : {name}</h5><br/>
<h5>Department : {branch}</h5>
<br/>
<h6>choose to view publications : &nbsp;&nbsp;
<select onChange={handleSChange} >
      <option value="approved">Approved publications</option>
      <option value="rejected">Rejected publications</option>
     </select>&nbsp;&nbsp;
     <button onClick={handleSq}>View</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <button onClick={q}>Home</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
     </h6>
     {/* <input onChange={event => setTitle(event.target.value)} > */}

     <MaterialTable

    data={listOfUsers}
      columns={columns1}
       />
    </div>
  )
}

export default ViewProfile
import React from 'react'
import "./Search.css"
import { useState } from 'react'
import axios from "axios";
import MaterialTable from 'material-table';
import "./style.css"
import { Title } from '@material-ui/icons';
import {useNavigate} from "react-router-dom"

//https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=publication&btnG=


function ApprovePublication() {
    //const branch="qwwee"
    const navigate = useNavigate()
    const branch =localStorage.branch;
    const [listOfUsers, setListOfUsers] = useState([]);
    const columns1=[
        { title: 'Title', field: 'Title' },
        { title: 'Author', field: 'Faculties' },
        { title: 'Year', field: 'Year'},
        { title: 'Journal Name', field: 'Name' },
        { title: 'Branch', field: 'Branch'},
        { title: 'Details', field: 'Details'}
      ]
      const q=()=>{
        navigate('/home',{replace:true}) 
        }
   
 const handleS= async (e) => {
            e.preventDefault()
            
            axios.post("http://localhost:3001/RNC/public",{Branch: branch}).then((response) => {
                console.log(response.data)
                setListOfUsers(response.data.data);
                //console.log(response.data)
                 //navigate("/home")
                  //console.log(res.message)  
                alert(response.data.message)
              });}
              // var ab="name"
              // var url = "http://www.google.comsearch?q="+{ab};
              //const id="abc"
             // <a href={'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q='  +id+ '&btnG='} target="_blank">click here</a>
    return (
<div className='search'>
<h1>&nbsp;Verification of publication details </h1>
<form>
<label>
    &nbsp;&nbsp; view all non-verified deatils of publication
    </label>&nbsp;&nbsp;&nbsp;
    <button onClick={handleS}>View all</button>&nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={q}>Home</button>

</form>
<br/>

<h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.goto scholar Link  <a href="https://scholar.google.com/schhp?hl=en&as_sdt=0,5" target="_blank">click here</a></h5>

 <br/>
 <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Search on google Link  <a href='https://www.google.com/' target="_blank">click here</a></h5>
 
 <br/>
 <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. goto Scopus Link  <a href="https://www.scopus.com/freelookup/form/author.uri?zone=TopNavBar&origin=NO%20ORIGIN%20DEFINED" target="_blank">click here</a></h5>
 
 <br/>
{/* <a href={url} target="_blank">Lcddink</a> 
<a href="http://www.google.com/search?q=" onclick="location.href=this.href+url;return false;" target="_blank">Link</a>   */}
<div class="container">
<MaterialTable
  
  actions={[
    {
       
      icon:()=><button><h6>Aprove</h6></button>,
      tooltip: 'Approve this publication',
      onClick: (event, rowData) => {
        event.preventDefault()
              const  id=rowData._id
        const url = "http://localhost:3001/RNC/verified";   
        //const { data: res } = await axios.post(url, {title : title})  ### must be post 
        axios.post(url, {"Title": rowData.Title,"Confirm": "Yes"}).then((response) => {

            console.log("aproving :"+rowData.Title) 
            alert(response.data.message)               //required ones
          })
       console.log(rowData.Title)
      }
    }, {
       
        icon:()=><button><h6>Reject</h6></button>,
        tooltip: 'Reject this publication',
        onClick: (event, rowData) => {
            event.preventDefault()
                  const  id=rowData._id
            const url = "http://localhost:3001/RNC/verified"; //link of api,which delete from temp table n store details to rejected table  
            //const { data: res } = await axios.post(url, {title : title})  ### must be post 
            axios.post(url, {"Title": rowData.Title,"Confirm": "No"}).then((response) => {
                console.log("rejecting :"+rowData.title) 
                //alert(response.data.message)    
               // console.log(listOfUsers)                //required ones
              })
           console.log(rowData._id)
            }
        }

        // {
       
        //   icon:()=><button><h6>Scholar</h6></button>,
        //   tooltip: 'search on google Scholar about this publication',
        //   onClick:{}
        //   },

        //   {
       
        //     icon:()=><button><h6>google </h6></button>,
        //     tooltip: 'search on google about this publication',
        //   }
  ]}
    data={listOfUsers}
      columns={columns1}
       />
</div>
<br/></div>
    )
    }
export default ApprovePublication
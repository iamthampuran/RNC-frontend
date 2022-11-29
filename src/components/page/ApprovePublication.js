import React from 'react'
import "./Search.css"
import { useState } from 'react'
import axios from "axios";
import MaterialTable from 'material-table';

import { Title } from '@material-ui/icons';
import {useNavigate} from "react-router-dom"



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
        { title: 'Details', field: 'Details'},
        { title: 'MITS Affiliated', field : 'Affiliated '}
      ]
      const q=()=>{
        navigate('/home',{replace:true}) 
        }

        const [choose,setChoose]=useState("")
        const [choose2,setChoose2]=useState("")//initiating choose2 as null
        const [choose3,setChoose3]=useState("")
    
        const handle= async (e) => {
               console.log("__"+choose)
               const url ='https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q='  +choose+ '&btnG='
               window.open(url); //new tab
             // window.location.href =url ; //same window reload cheyyan
        }
        const handle2= async (e) => {
            console.log("__"+choose)
            
            const url ='https://www.google.com/search?q='  +choose2
             window.open(url); //new tab
             // window.location.href =url ; //same window reload cheyyan
     }
    
     const handle3= async (e) => {
        console.log("__"+choose)
        
        const url1 ='https://www.google.com/search?q='  +choose3
        const url='https://www.scopus.com/results/authorNamesList.uri?sort=count-f&src=al&sid=c2623b7d81c5b6c13b56b38f232518c7&sot=al&sdt=al&sl=20&s=AUTHLASTNAME%28'+choose3+'%29&st1='+choose3+'&orcidId=&selectionPageSearch=anl&reselectAuthor=false&activeFlag=true&showDocument=false&resultsPerPage=20&offset=1&jtp=false&currentPage=1&previousSelectionCount=0&tooManySelections=false&previousResultCount=0&authSubject=LFSC&authSubject=HLSC&authSubject=PHSC&authSubject=SOSC&exactAuthorSearch=false&showFullList=false&authorPreferredName=&origin=searchauthorfreelookup&affiliationId=&txGid=40694e9b93d6bdf7d18a4a0e07cf9b9f'
        window.open(url); //new tab
         // window.location.href =url ; //same window reload cheyyan
    }
   
 const handleS= async (e) => {
            e.preventDefault()
            
            axios.post("https://rnc2.herokuapp.com/RNC/public",{Branch: branch}).then((response) => {
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
      <div>
<div className='details'>
<h1 className='search'>Verification of publication details </h1>
<form>
<h5 >
    View all non-verified publications
    </h5>
    &nbsp;&nbsp;
    <button className="btn21 button21" onClick={handleS}>View all</button>&nbsp;
    <button className="btn21 button21" onClick={q}>Home</button>

</form>
<br/>
</div>
<div className='google'>
<h6>
Enter book title to search on Google Scholar &nbsp;:&nbsp;&nbsp;
<input onChange={event => setChoose(event.target.value)} />&nbsp;
<button className="btn21 button21" onClick={handle}>Search on Scholar</button> &nbsp;&nbsp;<br/><br/>
Enter book title to search on Google 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
<input onChange={event => setChoose2(event.target.value)} />
&nbsp;
<button className="btn21 button21" onClick={handle2}>Search on Google</button>
<br/><br/>
Enter name of author to search on Scopus &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
<input onChange={event => setChoose3(event.target.value)} />
&nbsp;
<button className="btn21 button21" onClick={handle3}>Search on Scopus</button><br/><br/>
</h6><br/>
</div>
<div class="container">
<MaterialTable
  
  actions={[
    {
       
      icon:()=><button><h6>Approve</h6></button>,
      tooltip: 'Approve this publication',
      onClick: (event, rowData) => {
        event.preventDefault()
              const  id=rowData._id
        const url = "https://rnc2.herokuapp.com/RNC/verified";   
        //const { data: res } = await axios.post(url, {title : title})  ### must be post 
        axios.post(url, {"Title": rowData.Title,"Confirm": "Yes"}).then((response) => {

            console.log("aproving :"+rowData.Title) 
            alert(response.data.message)               //required ones
          })
       console.log(rowData.Title)
      }
    }, {
       
        icon:()=><button><h6>Decline</h6></button>,
        tooltip: 'Reject this publication',
        onClick: (event, rowData) => {
            event.preventDefault()
                  const  id=rowData._id
            const url = "https://rnc2.herokuapp.com/RNC/verified"; //link of api,which delete from temp table n store details to rejected table  
            //const { data: res } = await axios.post(url, {title : title})  ### must be post 
            axios.post(url, {"Title": rowData.Title,"Confirm": "No"}).then((response) => {
                console.log("rejecting :"+rowData.title) 
                //alert(response.data.message)    
               // console.log(listOfUsers)                //required ones
              })
           console.log(rowData._id)
            }
        }

       
  ]}
  title={"Publication Details"}
    data={listOfUsers}
      columns={columns1}
       />
</div>
<br/></div>
    )
    }
export default ApprovePublication
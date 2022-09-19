import React from 'react'
import MaterialTable from 'material-table';
import materialicons from 'mdb-react-ui-kit'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Table.css'

function Table(props) {
  const navigate =useNavigate();
    const columns1=props.col
      
      const data1=[{title: 'Mehmet', author: 'Baran',year: 1987, nameJ: 'rghj'}]
  if(props.action == "Member")
  {
    return (
      <div>
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
        icon:()=><button className='member'>{props.buttonname}</button>,
        tooltip: 'Save User',
        onClick: (event, rowData) => {
         console.log(rowData)
         const url = props.event
         //console.log(url)
         axios.post(url,{name:rowData.name,branch:rowData.branch}).then((response) =>{
            console.log(response)
            alert(response.data.message)
            navigate('/home',{replace:true})
         })
        }
      }
    ]}
      data={props.data}
        columns={columns1}
         />
         
        </div>
    )
  }
  
  else {
    return (
      <div>
  <MaterialTable 
  title={props.action}
   options={{
      exportButton: {
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
    
   /* actions={[
      {
        icon:()=><button>{props.buttonname}</button>,
        tooltip: 'Save User',
        onClick: (event, rowData) => {
         console.log(rowData)
         //const url = props.event
         //console.log(url)
         window.open(col)
            console.log(response)
            alert(response.data.message)
            navigate('/home',{replace:true})
         })
        }
      }
    ]}*/
      data={props.data}
        columns={columns1}
         />
         
        </div>
    )
  }



  }    
  
export default Table
import React from 'react'
import MaterialTable from 'material-table';
import materialicons from 'mdb-react-ui-kit'
function Table(props) {

    const columns1=props.col
      
      const data1=[{title: 'Mehmet', author: 'Baran',year: 1987, nameJ: 'rghj'}]
      
  return (
    <div>
<MaterialTable 
 options={{
    exportButton: {
        csv: true,
        pdf:true,
    },
    
  }}
  localization={{
    toolbar: {
      exportCSVName: "Export as Excel format",
      exportPDFName: "Export as pdf!!"
    }
  }}    

  actions={[
    {
      icon:()=><button>Show</button>,
      tooltip: 'Save User',
      onClick: (event, rowData) => {
       console.log(rowData)
      }
    }
  ]}
    data={props.data}
      columns={columns1}
       />
       
      </div>
  )
}

export default Table
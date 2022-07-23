import React, {PureComponent} from 'react';
import './Data.css';
import jsPDF from 'jspdf';
import images from 'C:/Users/ASUS/RNC-NEW/src/forms/images.jpg'
import Axios from 'axios'
//import axios from 'axios';

const Data = () => {
     function pdfGenerator(){
        try {
            const url = "http://localhost:3001/RNC/return";
            Axios.get(url).then((res) =>{
            console.log(res.data)
            alert(res.data.message)
            var doc = new jsPDF('l','pt')
            
            doc.setFontSize(20)
            doc.text(40,20,'Fee Reimbursement')
    //doc.text(30,30,S)
            doc.addImage(images,'jpg',50,50,250,100)
            doc.setFontSize(15)
            doc.text(600,50,"MITS|RNC|"+res.data.year+"|"+res.data.count)
            doc.setFontSize(15)
            doc.text(40,300,res.data.documentation)
            doc.setFontSize(15)
            doc.text(500,350,res.data.name)
            doc.save("generated.pdf");
            })
            
            
            
        } catch (error) {
            alert(error)
        }

        
    }
    return (
        <div className='newdata'>
            <h1>Hello Admin</h1>
            <button type='submit' onClick={pdfGenerator}>Download</button>
        </div>
    );
};

export default Data;
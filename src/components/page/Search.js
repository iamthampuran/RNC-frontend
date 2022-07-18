import React from 'react'
import { Link, useNavigate } from "react-router-dom";

import { useState } from 'react'

function Search() {

const [search,setSearch] = useState('')

const handleS=(e)=>{
    e.preventDefault()
    console.log(search)
}

    return (
<div>
<h1>&nbsp;&nbsp;&nbsp;searching and sorting</h1>
<form>
    <label>
    &nbsp;&nbsp; Enter field to be search
    </label>&nbsp;&nbsp;
    <input style={{ width:"500px" }}
              className="input"
              type="text"
              id="fname"
              //name="name"
              placeholder="enter"
              name="fileds"
              
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            
              required
            />&nbsp;&nbsp;
    <button onClick={handleS}>search</button>
    
</form>
{search}
</div>
    )
    }

    
    export default Search
import React, { useState } from 'react'
import "./Join.css";
import {Link} from 'react-router-dom'
let user;
const sendUser=()=>{
    user=document.getElementById('Joininput').value;
    document.getElementById('Joininput').value=" ";
  } 
   
const Join = () => {
  const [name,setname]=useState(" ");

    return (

    <div className='JoinPage'>
        <div className='JoinContainer'>
        <h1 id="JoinHeading">Join Page</h1>
<input onChange={(e)=> setname(e.target.value)} type='text' placeholder='Enter your name' id='Joininput'/>

<Link onClick={(event) => ! name ?event.preventDefault():null } to="/chat"><button onClick={sendUser}type='button' className='Joinbtn'>Login</button></Link>
        </div>
       
        </div>
  )
}

export default Join
export {user}
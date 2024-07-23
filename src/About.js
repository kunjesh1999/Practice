import  Axios  from 'axios'
import React, { useState } from 'react'

 function About() {
    const [mytitle,settitle]=useState('')
    const [mybode,setbody]=useState('')
    const Handlesubmit=(e)=>{
     e.preventDefault()
     Axios.post("https://jsonplaceholder.typicode.com/posts",{
       title:mytitle,
       body:mybode
     }).then((response)=>{
    console.log(response);
     }).catch((error)=>{
       console.log(error);
     })

    }
  return (
    <div>
     <form onSubmit={Handlesubmit}>
        <label>Enter Title</label>
        <input type='text' name='title' value={mytitle} onChange={(e)=>settitle(e.target.value)}/>
        <br/>
        <label>Enter body</label>
        <input type='text' name='body' value={mybode} onChange={(e)=>setbody(e.target.value)}/>
        <br/>
        <input type='submit' value='post'/>
     </form>
    </div>
  )
}
export default About

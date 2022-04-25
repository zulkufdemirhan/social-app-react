import React from 'react'
import {useState} from 'react'
import './App.css';

export default function LoginPanel({Login,error}) {
const [details,setDetails]=useState({name: "" , email: "", password: ""})
const submitHandler = e => {
        e.preventDefault();
        Login(details);}
return (
<form onSubmit={submitHandler}>
        <div className='form-inner'>
                <h3>Thank you for watching my study.</h3>
                {(error != "") ? (<div className='error'> {error} </div>): ""}
                <div className='form-group'>
                        <input  placeholder='Name' type="text" name="name" id="name" onChange={e=> setDetails({...details, name:e.target.value})} value={details.name} />
                </div>
                <div className='form-group'>
                        <input placeholder='admin@admin.com' type="email" name="email" id="email" onChange={e=> setDetails({...details, email:e.target.value})} value={details.email} />
                </div>
                <div className='form-group'>
                        <input placeholder='admin123' type="password" name="password" id="password" onChange={e=> setDetails({...details, password:e.target.value})} value={details.password} />
                </div>
                <div className='form-group'>
                        <input type="submit" value="Login" id="submit" /> 
                        <input type="submit" value="SignUp"  id="signup"/>
                </div>
        </div>
</form>
)}

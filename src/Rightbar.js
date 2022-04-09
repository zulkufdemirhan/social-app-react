import React from 'react'
import {useState , useEffect} from 'react'
import axios from 'axios';
import './App.css';
import OnlineFriends from './OnlineFriends';

export default function Rightbar() {
  const [online,setOnline]=useState([]);

  const getApi = async ()=>{
    const response = await axios.get("https://randomuser.me/api/?results=10")
    setOnline(response.data.results)
  }
  useEffect(()=>{
    getApi()
  },[])

  // !--------------------------------------------------------
const çevrimiçibox = document.querySelector('.çevrimiçibox');

function aç (e) {
  const item = e.target;
  if(item.classList[0] === "onlinebox"){
    çevrimiçibox.style.display="flex";
  }
}


  return (
    <div className='onlinebar'>
        <div className='onlinebox' onClick={aç} > <span className='çevrimiçi'></span>Online (10)</div>
        <div className='çevrimiçibox'  >  
          <ul className='onlineul'>
          {online.map((data,id)=>(
            <li className='onlineli'>
              <OnlineFriends data={data} key={id} />              
            </li>  
            ))}
          </ul>
        </div>
    </div>
  )
}

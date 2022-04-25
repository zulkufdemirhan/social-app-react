import React from 'react'
import{useState,useEffect} from 'react'
import axios from 'axios';
import FriendBox from './FriendBox';
import './App.css';

export default function Leftbar() {
  const [user,setUser]=useState([]);

  const getApi = async ()=>{
    const response = await axios.get("https://randomuser.me/api/?results=10")
    setUser(response.data.results)
  }
  useEffect(()=>{
    getApi()
  },[])

  // !--------------------------------------------------------

  const friendbox=document.querySelector(".friendbox")

  function openFriendsBox(e){
    const item =e.target;
    if(item.classList[0]==="open"){
      console.log("friend works")
    friendbox.style.display="flex";
    }
  }

  function closeFriendsBox(e){
    const item =e.target;
    if(item.classList[0]==="close"){
      friendbox.style.display="none";
    }
  }

  return (
    <div className='sidebar'>

        <ul className='leftul'>
          <li className='leftli'><i class="fa-regular fa-hashtag"/> Explore </li>
          <li className='leftli'><i className="open fa-solid fa-user-group" onClick={openFriendsBox} /> Friends</li>
          <li className='leftli'><i class="fa-solid fa-map-location-dot"></i> Map</li>
          <li className='leftli'><i class="close fa-solid fa-earth-asia" onClick={closeFriendsBox}></i>More</li>
        </ul>

        <div className='friendbox'>
          
          <ul className='friendul'>
              {user.map((data,id)=>
              <li className='friendli'>
              <FriendBox data={data} key={id} />
              
              </li>
              
              )}

          </ul>

        </div>
    </div>
  )
}

// https://randomuser.me/api/?results=10

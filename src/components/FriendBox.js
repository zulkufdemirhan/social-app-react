import React from 'react'
import './App.css';

export default function FriendBox({data}) {
return (
    <div className='datafriend'>
    
        <img src={data.picture.medium} />
        <p className='apidata'>{data.name.first} {data.name.last} </p>
        <p className='apidata'>{data.location.country}</p>
        <i class=" friendıcon fa-solid fa-message"></i> 
    </div>
)
}

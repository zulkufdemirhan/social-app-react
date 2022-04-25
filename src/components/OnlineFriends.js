import React from 'react'
import './App.css';

export default function OnlineFriends({data}) {
return (
    <div className='onlinephoto'>
        <img src={data.picture.medium} />
    </div>
)}

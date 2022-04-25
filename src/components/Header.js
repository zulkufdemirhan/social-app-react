import React from 'react'
import './App.css';

export default function HeaderTop({deneme}) {
    
    
    function header(){
        
        const headerInput = document.querySelector(".headerInput");
        const home = document.querySelector(".home")
        const discover = document.querySelector(".discover")
        
        let ınputValue = true;
        
        headerInput.addEventListener("click",()=>{
            if(ınputValue === true){
                headerInput.style.width="550px"
                home.style.display="none"
                discover.style.display="none"
                ınputValue = false;
            }else{
                home.style.display="flex"
                discover.style.display="flex"
                headerInput.style.width="250px";
                ınputValue = true;
            }
        })
    
    
    
    }
    
return (
    <div className='header'>
            
    <div className='profil'>
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-bell" className='bang fa-solid fa-bell' onClick={deneme} ></i>
            <i class="fa-solid fa-message"></i>
            
        </div>
        

        <div className='middle'>
            <h2 className='home'>Home</h2>
            <h2 className='discover' > Files</h2>
            <input type="text" placeholder="Search" className='headerInput' onFocus={header} />
        </div>

        <div className='color'>
            <span className='green'></span>
            <span className='yellow'></span>
            <span className='red'></span>
        </div>
    </div>

    
)
}

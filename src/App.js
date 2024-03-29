import React from 'react'
import {Leftbar} from './components/Leftbar';
import {Rightbar} from './components/Rightbar'
import {Article} from './components/Article'
import {LoginPanel} from './components/LoginPanel'
import {HeaderTop} from './components/Header'
import {useState} from 'react'
import './App.css';
import photo from './photos/elon.jpg'
import foto from './photos/zd.jpg'

function App() {
  const adminUser= {
    email:"admin@admin.com",
    password:"admin123"
  }
  const [user,setUser]=useState({name:"" , email:""});
  const [error,setError]=useState("");
  const Login = details => {
  if(details.email == adminUser.email && details.password == adminUser.password){
    setUser({
      name : details.name,
      email: details.email
    });
  }else{
    setError("The person has not match !")
  }
}
  const Logout= ()=>{
    setUser({
      name:"",
      email:""
    })
  }
// !-------------------------------------------------------
function bildirim (e){
    const notificationBox = document.querySelector('.notificationBox');
    const bildirim = document.querySelector('.bildirim');
    const item =e.target;

    if(item.classList[0] === 'bang' ){  
      notificationBox.style.display="flex";
      bildirim.style.display="none" ;
      }
}
function exit (e){
  const notificationBox = document.querySelector('.notificationBox');
  const bildirim = document.querySelector('.bildirim');
  const item = e.target;
  if(item.classList[0] === 'exit' ){
    notificationBox.style.display="none";
    }
}
// !--------------------------------------------------------
return (
    <div className='container'>
        <HeaderTop deneme={bildirim} />
        <div className='notificationBox'>
              <li className='liList'>  
              <img src={foto}/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              </li>
              <li className='liList'> 
              <img src={photo}/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              </li>
              <i className='exit fa-solid fa-chevron-right' onClick={exit} ></i>
        </div>
        {(user.email != "") ? (
          <div className='mainPage'>
              <div className='cıkıs'>
                  <h4>Welcome , {user.name}</h4>
                  <div className='bildirim' >2</div> 
                  <h5>Logout</h5><i class="fa-solid fa-right-from-bracket" onClick={Logout} ></i>
              </div>
                  <div className='gövde'> 
                      <div className='leftbar'>
                          <Leftbar/>
                      </div>
                      <div className='story'>
                          <Article/>
                      </div>
                      <div className='rightbar'>
                          <Rightbar/>
                      </div>
                  </div>
          </div>
        ) : (   
            <LoginPanel Login={Login}  error={error} /> 
        )}
    </div>
  )
}  
export default App;





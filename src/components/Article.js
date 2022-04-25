import React from 'react'
import './App.css';
import foto from './zd.jpg'
import istanbul from './istanbul.jpg'
import galata from './galata.jpg'
import kızkulesi from './kızkulesi.jpg'

export default function Article() {

  const commentInput =document.querySelector(".commentInput");
  const commentBox=document.querySelector(".commentshare");

  function addComment(e){
    const item = e.target ;
    if (item.classList[0]==="share"){
      console.log("worked")
      if(commentInput.value === ""){
        alert("write Something");
      }else{
        
      const commentUl= document.createElement("ul");
      commentUl.classList.add("commentUl");

      const commentLi =document.createElement("li");
      commentLi.innerText = commentInput.value;
      commentLi.classList.add("commentLi");

      const liıcons = document.createElement('div');
      liıcons.innerHTML= `
                            <i class="fa-solid fa-thumbs-up"></i>
                            <i class="fa-solid fa-thumbs-down"></i>
                            <i class="fa-solid fa-share"></i>
                            <i class="delete fa-solid fa-trash-can"></i> 
                        `
      liıcons.classList.add("liıcons");

      commentUl.appendChild(commentLi);
      commentUl.appendChild(liıcons);
      commentBox.appendChild(commentUl);
      
      commentInput.value= "";
      }
    }
  }

  // !--------------------------------------------------------

  function deleteComment(e){
    const item = e.target 
    if(item.classList[0] === "delete"){
      console.log("delete works");
      const parent = item.parentElement
      parent.remove();
    }
  }

  // !--------------------------------------------------------

  return (
    <div className='commentBox'>

        <div className='commentBar'>
              <img className='zd' src={foto}/>
              <input placeholder="What's happening ?" className='commentInput'></input>
        </div>

        <div className='ıconBox'>
          
          <div className='araçlar'>
              <i class="fa-solid fa-image"></i>
              <i class="fa-solid fa-pen"></i>
              <i class="fa-solid fa-face-smile"></i>
              <i class="fa-solid fa-location-dot"></i>            
          </div>

          <i className='share fa-solid fa-paper-plane' onClick={addComment} ></i>
          
        </div>

        <div className='commentshare'></div>
        
        <div className='commentpage'>
            <li className='userComment'>
              <p className='yorum'>A beautiful view from Istanbul...</p>
            </li>
          <img className='istanbul' src={istanbul} />

              <i class="bir fa-solid fa-thumbs-up"></i>
              <i class="iki  fa-solid fa-thumbs-down"></i>
              <i class="üç fa-solid fa-share"></i>
              <i className="delete dört fa-solid fa-trash-can" onClick={deleteComment}></i> 
          
        </div>  

        <div className='commentpage'>
            <li className='userComment'>
              <p className='yorum'>A beautiful view from Istanbul...</p>
            </li>
          <img className='istanbul' src={galata} />

              <i class="bir fa-solid fa-thumbs-up"></i>
              <i class="iki  fa-solid fa-thumbs-down"></i>
              <i class="üç fa-solid fa-share"></i>
              <i className="delete dört fa-solid fa-trash-can" onClick={deleteComment}></i> 
          
        </div>
        
        <div className='commentpage'>
            <li className='userComment'>
              <p className='yorum'>A beautiful view from Istanbul...</p>
            </li>
          <img className='istanbul' src={kızkulesi} />

              <i class="bir fa-solid fa-thumbs-up"></i>
              <i class="iki  fa-solid fa-thumbs-down"></i>
              <i class="üç fa-solid fa-share"></i>
              <i className="delete dört fa-solid fa-trash-can" onClick={deleteComment}></i> 
          
        </div>

    </div>
  )
}




import React from 'react'
import logo from "../assets/img/logo.png";
import edit from "../assets/img/edit.png";
import Delete from "../assets/img/delete.png"
import { Link } from 'react-router-dom';

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img src={logo} alt="" />
        <div className="user">
          <img src={edit} alt="" />
          <div className="info">
            <span>Miki</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={edit} alt="edit" />
            </Link>
            <img src={Delete} alt="delete" />
          </div>
         
        </div>

        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sunt amet qui esse aliquid, </h1>
        
            <p>
            Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Dignissimos eius fugiat perferendis? 
            Accusamus distinctio quae fugiat vel magnam quam sed 
            itaque, tempora voluptatem sit odio sequi pariatur earum
             mollitia odit? Dolorum libero consectetur eos ducimus 
             quos labore quidem dolores, aspernatur minima, vel iste 
             accusantium repellendus quo similique.


            </p>
           

             <p>
             Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Dignissimos eius fugiat perferendis? 
            Accusamus distinctio quae fugiat vel magnam quam sed 
            itaque, tempora voluptatem sit odio sequi pariatur earum
             mollitia odit? Dolorum libero consectetur eos ducimus 
             quos labore quidem dolores, aspernatur minima, vel iste 
             accusantium repellendus quo similique.

             </p>
            
             
             <p>
             Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Dignissimos eius fugiat perferendis? 
            Accusamus distinctio quae fugiat vel magnam quam sed 
            itaque, tempora voluptatem sit odio sequi pariatur earum
             mollitia odit? Dolorum libero consectetur eos ducimus 
             quos labore quidem dolores, aspernatur minima, vel iste 
             accusantium repellendus quo similique.

             </p>
            
             <p>
             Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Dignissimos eius fugiat perferendis? 
            Accusamus distinctio quae fugiat vel magnam quam sed 
            itaque, tempora voluptatem sit odio sequi pariatur earum
             mollitia odit? Dolorum libero consectetur eos ducimus 
             quos labore quidem dolores, aspernatur minima, vel iste 
             accusantium repellendus quo similique.
             </p>
          
      </div>
      <div className="menu">
        m
      </div>
    </div>
  )
}

export default Single
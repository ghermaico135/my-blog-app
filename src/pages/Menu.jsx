import React from 'react'

function Menu() {
    const posts =[{
        id:1,
        title:"post title 1",
        desc:"This clone full stack project",
        img:"miki darling",
        
      },
      {
        id:2,
        title:"post title 2",
        desc:"This clone full stack project",
        img:"herriye darling",
        
      },
      {
        id:3,
        title:"post title 3",
        desc:"This clone full stack project",
        img:"herriye darling",
        
      },{
        id:4,
        title:"post title 4",
        desc:"This clone full stack project",
        img:"herriye darling",
        
      }
      ]
      
  return (
    <div className="menu">
       <h1>Others posts you may like</h1>
        {
            posts.map((post) =>(
                <div className="post" key={post.id}>
                    <img src={post.img} alt="image" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>

                </div>
            ))
        }
    </div>
  )
}

export default Menu
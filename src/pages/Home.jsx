import React from 'react'
import { Link } from 'react-router-dom'

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

function Home() {
  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post) =>(
          <div className="post" key={post.id}>
            <div className="image">
                <img src={post.img} alt="image" />
            </div>
            <div className="content">
              <Link className="link" to={`$/post/${post.id}`}>
              <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>ReadMore</button>
            </div>
           
          </div>
    
        )

        )}
      </div>


    </div>
  )
}

export default Home
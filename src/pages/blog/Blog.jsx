import React from 'react'
import './Blog.scss'
import {Link} from 'react-router-dom'
import BlogCard from '../../components/blog_card/BlogCard'

const Blog = () => {
  return (
    <div className="Blog">
      <div>
        <h2>Most Trending Blogs</h2>
        <div className="carousal">
          <Link to="#"><BlogCard/></Link>
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link> 
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link> 
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link> 
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link>
        </div>
    
      </div>
    
      <div>
        <h2>Getting Exponential Interests</h2>
        <div className="carousal">
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link> 
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link> 
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link> 
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link>
        </div>
    
      </div>
    
      <div>
        <h2>Suggesstions for you</h2>
        <div className="carousal">
    
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link> 
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link> 
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link> 
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link>
          <Link to="#"><BlogCard/> </Link>
        </div>
    
      </div>
  
    </div>
    )
}

export default Blog
import React from "react";
import './dashboard.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Dashboard(){
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/home/dashboard').then(res => res.json())
      .then(posts => setPost(posts))
      .catch(err => console.log(err));
  }, []);
    return(
        <div className="main-body-container">
            <div className="section-left">
                <div className="blog-post-content">
                        {posts.map(post => {
                          return (
                            <div className="blog-post-content-container" key={post.id}>
                              <div className="blog-post-head">
                                <Link to="/blogs/{post.id}" className="blog-author"><i id="icon-2" className='bx bxs-pencil'></i> {post.author} </Link>
                                <p className="blog-date"> {post.date_posted} </p>
                              </div>
                              <div className="blog-post-body">
                                <h1 className="usr-title"> </h1>
                                <p className="blog-content"><i id="icon-0" className='bx bxs-quote-alt-left'></i> {post.post_content} <i id="icon-1" className='bx bxs-quote-alt-right'></i></p>
                              </div>
                            </div>);
                        })}
                </div>
            </div>

            <div className="section-right">
                <div className="side-bar-container">
                    <h3 className="side-bar-title">Side Bar</h3>
                    <p className="side-bar-info">any random information here is allowed !
                    </p>
                        <ul>
                            <li>Latest post</li>
                            <li>Announcements</li>
                            <li>Calenders</li>
                            <li>etc</li>
                            <li id="list-create-blog"><Link to="/create-blog/" id="create-blog"><i className='bx bx-plus-circle' id="icon-3"></i> Create new blog</Link></li>
                        </ul>
                </div>
            </div>
        </div>
    );
}

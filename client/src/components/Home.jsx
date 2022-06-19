import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/get-posts').then(function (response) {
      setPosts(response.data.body);
    });
  }, []);
  console.log(posts);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        {posts.map((post) => (
          <div className="card mt-4" style={{ width: '80%' }}>
            <div className="card-body">
              <h5 className="card-title fw-bold">{post.user}</h5>
              <p className="card-text">{post.description}</p>
              <a href="#" className="btn btn-primary me-2">
                Discuss
              </a>
              <button className="btn btn-primary me-2" type="submit">
                <i className="bi bi-hand-thumbs-up"></i>
              </button>
              <p className="d-inline fw-bold">+{post.likes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

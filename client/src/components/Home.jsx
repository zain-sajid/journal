import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from '../logo.png';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios.get('/get-posts').then(function (response) {
      setPosts(response.data.body);
    });
  }, [refresh]);

  function handleLike(id) {
    axios.patch(`/like-post/${id}`).then(function (response) {
      setRefresh(!refresh);
    });
  }

  function openPost(id) {
    window.location.href = `/post/${id}`;
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5 mx-0">
        <div className="d-flex justify-content-center">
          <img src={Logo} alt="logo" style={{ width: '10%' }} />
        </div>

        {posts.map((post, index) => (
          <div
            className="shadow-sm card mt-4"
            style={{ width: '80%' }}
            key={post.id}
          >
            <div className="card-body">
              <h5 className="card-title fw-bold">{post.user}</h5>
              <p className="card-text">{post.description}</p>
              <button
                className="btn btn-primary me-2"
                onClick={() => openPost(post.id)}
              >
                Discuss
              </button>
              <button
                className="btn btn-primary me-2"
                type="submit"
                onClick={() => handleLike(post.id)}
              >
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

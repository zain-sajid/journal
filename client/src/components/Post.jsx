import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Post(props) {
  const { user } = useAuth0();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get(`/get-post/${id}`).then(function (response) {
      setPost(response.data.body);
    });
  }, [refresh]);

  useEffect(() => {
    axios.get(`/get-comments/${id}`).then(function (response) {
      setComments(response.data.body);
    });
  }, [refresh]);

  function handleLike(id) {
    axios.patch(`/like-post/${id}`).then(function (response) {
      setRefresh(!refresh);
    });
  }

  function createComment() {
    axios
      .post('/create-comment', {
        user: user.nickname,
        text: text,
        postId: id,
      })
      .then(function (response) {
        setRefresh(!refresh);
      });
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5 mx-0">
        <div
          className="shadow-sm card mt-4"
          style={{ width: '80%' }}
          key={post.id}
        >
          <div className="card-body">
            <h5 className="card-title fw-bold">{post.user}</h5>
            <h5 className="h6 mb-2 text-muted">
              {new Date(post.createdAt).toUTCString()}
            </h5>
            <p className="card-text">{post.description}</p>

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
        <h5 className="fw-bold mt-4" style={{ padding: '0 10rem' }}>
          Comments
        </h5>
        {comments.map((post, index) => (
          <div
            className="shadow-sm card mt-2"
            style={{ width: '80%' }}
            key={post.id}
          >
            <div className="card-body">
              <h5 className="card-title fw-bold">{post.user}</h5>
              <p className="card-text">{post.text}</p>
            </div>
          </div>
        ))}
        <textarea
          className="shadow-sm form-control mt-2 p-3"
          id="post"
          rows="2"
          placeholder="Comment"
          style={{ resize: 'none', width: '80%' }}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          type="button"
          className="btn btn-primary mt-3 w-25"
          onClick={createComment}
        >
          Comment
        </button>
      </div>
    </div>
  );
}

export default Post;

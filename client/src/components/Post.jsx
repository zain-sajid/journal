import React from 'react';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function Post() {
  const { user } = useAuth0();
  console.log(user);
  const [description, setDescription] = useState('');

  function createPost(event) {
    event.preventDefault();

    axios
      .post('/create-post', {
        user: user.nickname,
        description: description,
      })
      .then(function (response) {
        window.location.href = '/home';
      });
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <label for="post" className="form-label h4 fw-bold">
          Time for a confession!
        </label>
        <textarea
          className="form-control mt-1"
          id="post"
          rows="5"
          placeholder="Enter your confession here"
          style={{ resize: 'none' }}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          type="button"
          class="btn btn-primary mt-3"
          style={{ width: '10%' }}
          onClick={createPost}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default Post;

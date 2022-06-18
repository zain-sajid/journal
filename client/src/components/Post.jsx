import React from 'react';

function Post() {
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
        ></textarea>
        <button
          type="button"
          class="btn btn-primary mt-3"
          style={{ width: '10%' }}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default Post;

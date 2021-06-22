import React from 'react';
import '../styles/Post.css';
import 'bootstrap/dist/css/bootstrap.css';

const Post = (props) => (
  <div className="panel panel-default post-body">
    <div className="panel-body">
      {
        props.postBody.map((postPart, idx) => (
          <div key={idx}>{postPart}</div>
        ))
      }
    </div>
  </div>
);

export default Post;
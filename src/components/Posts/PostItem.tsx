import React from 'react';
import {Post} from "../../types";

interface Props {
  post: Post
}

const PostItem: React.FC<Props> = ({post}) => {
  return (
    <div className="card mb-2 p-1">
      <p className="card-text small m-0"><strong>{post.author}</strong>  writes:</p>
      <hr/>
      <p className="card-text small">{post.message}</p>
    </div>
  );
};

export default PostItem;
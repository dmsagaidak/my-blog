import React from 'react';
import {Post} from "../../types";
import {Link, useNavigate} from "react-router-dom";
import axiosApi from "../../axiosApi";

interface Props {
  post: Post
}

const PostItem: React.FC<Props> = ({post}) => {
  const navigate = useNavigate()

  const removePost = async (post: Post) => {
    try{
      await axiosApi.delete('/posts/' + post.id + '.json');
      navigate('/');
    }finally{

    }
  }


  return (
    <div className="card mb-2 p-1">
      <p className="card-title m-0"><strong>{post.title}</strong></p>
      <p className="card-text small m-0">by <strong>{post.author}</strong></p>
      <div>
        <button className="btn btn-sm btn-primary">See More</button>
        <Link to={"edit-post/" + post.id} className="btn btn-sm btn-secondary">Edit</Link>
        <button className="btn btn-sm btn-danger" onClick={() => removePost(post)}>Remove</button>
      </div>
      <hr/>
      <p className="card-text small">{post.message}</p>
    </div>
  );
};

export default PostItem;
import React from 'react';
import PostForm from '../../components/PostForm/PostForm';
import {PostApi} from "../../types";
import axiosApi from "../../axiosApi";
import {Link, useNavigate} from "react-router-dom";


const Add: React.FC = () => {
  const navigate = useNavigate();
  const addPost = async (post: PostApi) => {
    try{
      await axiosApi.post ('/posts.json', post);
      navigate ('/')
    }finally{

    }
  }
  return(
    <div>
      <PostForm onSubmit={addPost}/>
      <Link to={'/'} className="btn btn-danger ms-4">Back</Link>
    </div>
  )

};

export default Add;
import React from 'react';
import PostForm from '../../components/PostForm/PostForm';
import {PostApi} from "../../types";
import axiosApi from "../../axiosApi";
import {useNavigate} from "react-router-dom";


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
    </div>
  )

};

export default Add;
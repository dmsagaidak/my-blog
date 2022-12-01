import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {PostApi} from "../../types";
import PostForm from "../../components/PostForm/PostForm";

const EditPost = () => {
  const {id} = useParams();
  const [post, setPost] = useState<PostApi | null>(null);
  const navigate = useNavigate();

  const getOnePost = useCallback(async () => {
    try{
      const postResponse = await axiosApi.get<PostApi>('/posts/' + id + '.json')
      setPost(postResponse.data)
    }finally {

    }
  }, [id]);

  useEffect(() => {
    if (id) {
      getOnePost().catch(console.error)
    }

  }, [id, getOnePost])

  const updatePost = async (post: PostApi) => {
    try{
      await axiosApi.put('/posts/' + id + '.json', post);
      navigate('/');
    }finally {

    }

  }

  return (
    <div>
      {post && (
        <PostForm
          onSubmit={updatePost}
          currentPost={post}
        />
      )}

    </div>
  );
};

export default EditPost;
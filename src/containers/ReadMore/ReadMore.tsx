import React, {useCallback, useEffect, useState} from 'react';
import PostItem from "../../components/Posts/PostItem";
import {useParams} from "react-router-dom";
import {Post, PostApi} from "../../types";
import axiosApi from "../../axiosApi";

const ReadMore = () => {
  const {id} = useParams();
  const [post, setPost] = useState<Post>({
    id: '',
    title: '',
    author: '',
    message: ''
  })

  const getOnePost = useCallback(async () => {
    try{
      const postResponse = await axiosApi.get<PostApi>('/posts/' + id + '.json');
      const received = {
        ...postResponse.data,
        id: id
      }
      console.log(received);
      console.log(id)


      setPost(received)
    }finally {

    }
  }, [id]);

  useEffect(() => {
    void getOnePost()
  }, [getOnePost])

  return (
    <div className="mt-3">
      <PostItem post={post}/>
    </div>
  );
};

export default ReadMore;
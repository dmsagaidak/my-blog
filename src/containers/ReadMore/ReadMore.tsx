import React, {useCallback, useEffect, useState} from 'react';
import PostItem from "../../components/Posts/PostItem";
import {useParams} from "react-router-dom";
import {Post, PostApi} from "../../types";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";

const ReadMore = () => {
  const {id} = useParams();
  const [post, setPost] = useState<Post>({
    id: '',
    title: '',
    author: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const getOnePost = useCallback(async () => {
    try{
      setLoading(true)
      const postResponse = await axiosApi.get<PostApi>('/posts/' + id + '.json');
      const received = {
        ...postResponse.data,
        id: id
      }
      setPost(received)
    }catch(e){
      console.error(e)
    }finally {
      setLoading(false)
    }
  }, [id]);

  useEffect(() => {
    void getOnePost()
  }, [getOnePost])

  return (
    <div className="mt-3">
      {loading ? <Spinner/> :
        (<PostItem post={post}/>)
      }
    </div>
  );
};

export default ReadMore;
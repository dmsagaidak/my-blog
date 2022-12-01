import React, {useCallback, useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {PostApi} from "../../types";
import PostForm from "../../components/PostForm/PostForm";
import Spinner from "../../components/Spinner/Spinner";

const EditPost = () => {
  const {id} = useParams();
  const [post, setPost] = useState<PostApi | null>(null);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const getOnePost = useCallback(async () => {
    try{
      setLoading(true);
      const postResponse = await axiosApi.get<PostApi>('/posts/' + id + '.json');
      setPost(postResponse.data);
    }catch (e){
      console.error(e);
    }finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      getOnePost().catch(console.error)
    }

  }, [id, getOnePost])

  const updatePost = async (post: PostApi) => {
    try{
      setLoading(true);
      await axiosApi.put('/posts/' + id + '.json', post);
      navigate('/');
    }catch (e) {
      console.error(e);
    }finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {loading ? <Spinner/> :
        post && (
        <PostForm
          onSubmit={updatePost}
          currentPost={post}
        />
      )}
        <Link to={'/'} className="btn btn-danger ms-4">Back</Link>
    </div>
  );
};

export default EditPost;
import React, {useState} from 'react';
import Spinner from "../../components/Spinner/Spinner";
import axiosApi from "../../axiosApi";
import {useNavigate} from "react-router-dom";
import {Post} from "../../types";


const Add = () => {
  const navigate = useNavigate();

  const [post, setPost] = useState<Post>({
    id: '',
    title: '',
    author: '',
    message: ''
  });

  const [loading, setLoading] = useState(false)

  const onPostChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setPost(prev =>({
      ...prev,
      [name]: value
    }))
  }

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    try{
      await axiosApi.post('/posts.json', post);
      navigate('/');
    }finally {
      setLoading(false)
    }
  }

  let form =(
    <form className="m-4" onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          id="author"
          name="author"
          type="text"
          className="form-control"
          value={post.author}
          onChange={onPostChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          className="form-control"
          value={post.title}
          onChange={onPostChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className="form-control"
          value={post.message}
          onChange={onPostChange}
        />
      </div>
      <button type="submit" className="btn btn-success mt-3">Send</button>
    </form>
  )

  if (loading) {
    form = (
      <Spinner/>
    )
  }

  return (
    <div>
      {form}
    </div>
  );
};

export default Add;
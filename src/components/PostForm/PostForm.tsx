import React, {useState} from 'react';
import {PostApi, PostMutation} from "../../types";

interface Props {
  onSubmit: (post: PostApi) => void;
  currentPost?: PostApi;
}

const PostForm: React.FC<Props> = ({onSubmit, currentPost}) => {
  const initialState = currentPost ? {
    ...currentPost
  }: {
    title: '',
    author: '',
    message: ''
  }
  const [post, setPost] = useState<PostMutation>(initialState);

  const onPostChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setPost(prev =>({
      ...prev,
      [name]: value
    }))
  }

  const onFormSubmit =  (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit( {
      ...post,
    })
  }


  return (
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
  );
};

export default PostForm;
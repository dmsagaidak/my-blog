import React from 'react';
import PostItem from "./PostItem";
import {Post} from "../../types";

interface Props {
  posts: Post[]
}

const Posts: React.FC<Props> = ({posts}) => {
  return (
    <div className="mt-2">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}/>
      ))}
    </div>
  );
};

export default Posts;
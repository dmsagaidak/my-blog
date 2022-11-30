import React from 'react';
import {Post} from "../../types";
import Posts from "../../components/Posts/Posts";

interface Props {
  posts: Post[]
}

const Home: React.FC<Props> = ({posts}) => {
  return (
    <div>
      <Posts
      posts={posts}
      />
    </div>
  );
};

export default Home;
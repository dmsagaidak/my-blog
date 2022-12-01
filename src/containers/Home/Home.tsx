import React from 'react';
import {Post} from "../../types";
import Posts from "../../components/Posts/Posts";
import Spinner from "../../components/Spinner/Spinner";

interface Props {
  posts: Post[],
  postsLoading: boolean
}

const Home: React.FC<Props> = ({posts, postsLoading}) => {
  return (
    <div>
      {postsLoading ? <Spinner/> : (
        <Posts
          posts={posts}
        />
      )}

    </div>
  );
};

export default Home;
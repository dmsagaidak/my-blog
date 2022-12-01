import React, {useCallback, useEffect, useState} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Contacts from "./containers/Contacts/Contacts";
import About from "./containers/About/About";
import Add from "./containers/Add/Add";
import Home from "./containers/Home/Home";
import axiosApi from "./axiosApi";
import {Post, PostsList} from "./types";
import EditPost from "./containers/EditPost/EditPost";



function App() {
  const location = useLocation();

  const [myPosts, setMyPosts] = useState<Post[]>([]);

  const [loading, setLoading] = useState(false)

  const getPosts = useCallback(async () => {
    try{
      setLoading(true)
      const postResponse = await axiosApi.get<PostsList>( '/posts.json');
      const posts = Object.keys(postResponse.data).map(key =>{
        const post = postResponse.data[key];
        post.id = key
        return post
      })

      setMyPosts(posts);

    }catch (e) {
      console.log(e)
    } finally{
      setLoading(false)
    }

  }, []);

  useEffect(() => {
    if (location.pathname === '/'){
      void getPosts();
    }
  }, [getPosts, location]);


  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={(
            <Home
            postsLoading={loading}
            posts={myPosts}
            />
          )}/>
          <Route path="add" element={(
            <Add/>
          )}/>
          <Route path="edit-post/:id" element={(
            <EditPost/>
          )}/>
          <Route path="about" element={(
            <About/>
          )}/>
          <Route path="contacts" element={(
            <Contacts/>
          )}/>
        </Routes>
      </main>
    </>
  );
}

export default App;

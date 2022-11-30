import React, {useCallback, useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Contacts from "./containers/Contacts/Contacts";
import About from "./containers/About/About";
import Add from "./containers/Add/Add";
import Home from "./containers/Home/Home";
import axiosApi from "./axiosApi";
import {Post, PostsList} from "./types";



function App() {
  const [myPosts, setMyPosts] = useState<Post[]>([])

  const getPosts = useCallback(async () => {
    try{
      const postResponse = await axiosApi.get<PostsList>( '/posts.json');
      const posts = Object.keys(postResponse.data).map(key =>{
        const post = postResponse.data[key];
        post.id = key
        return post
      })

      setMyPosts(posts)
    }catch (e) {
      console.log(e)
    }

  }, []);

  useEffect(() => {
    void getPosts();
  }, [getPosts]);


  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={(
            <Home
            posts={myPosts}
            />
          )}/>
          <Route path="add" element={(
            <Add/>
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

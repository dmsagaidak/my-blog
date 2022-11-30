import React, {useCallback, useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Contacts from "./containers/Contacts/Contacts";
import About from "./containers/About/About";
import Add from "./containers/Add/Add";
import Home from "./containers/Home/Home";
import axiosApi from "./axiosApi";
import {Post} from "./types";



function App() {
  const [myPosts, setMyPosts] = useState<Post[]>([])

  const getPosts = useCallback(async () => {
    const response = await axiosApi.get( '/posts.json');
    const keys = Object.keys(response.data);

    const promises = keys.map(async key => {
      const response = await axiosApi.get<Post>('/posts/' + key + '.json');
      console.log(response)
      return {
        id: key,
        author: response.data.author,
        message: response.data.message
      }

    })

    const postResponse = await Promise.all(promises);
    setMyPosts(postResponse)
  }, []);

  useEffect(() => {

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

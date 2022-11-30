import React from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Contacts from "./containers/Contacts/Contacts";
import About from "./containers/About/About";
import Add from "./containers/Add/Add";


function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container-fluid">
        <Routes>
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

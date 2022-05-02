import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Write from "./pages/Write";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/ecrire" element={<Write></Write>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;

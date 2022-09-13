import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import { BlogContext } from "./context/BlogContext";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Write from "./pages/Write";
import axios from "axios";
import Article from "./pages/Article";
import Header from "./components/header/Header";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <BlogContext.Provider value={{ data, setData }}>
        <HashRouter basename="/">
          <Header></Header>
          <Routes>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route
              path="/posts/:postTitle"
              element={<Article></Article>}
            ></Route>
            <Route path="/ecrire" element={<Write></Write>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
          </Routes>
        </HashRouter>
      </BlogContext.Provider>
    </React.Fragment>
  );
}

export default App;

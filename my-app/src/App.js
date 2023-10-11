import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import ManyInput from "./pages/ManyInput";

function App() {
  return (
    // JSX문법이므로 태그 사용할 때 HTML 태그와 헷갈리지 않게 주의!
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | {" "}
        <Link to="/counter">Counter</Link> | {" "}
        <Link to="/input">Input</Link> | <Link to="/manyInput">ManyInput</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input />} />
        <Route path="/manyInput" element={<ManyInput />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import Post from "./routes/post";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Post />} />
    </Routes>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Blog />}></Route>
        <Route exact path="/markdown/first_blog.md" element={<Blog />}></Route>
        <Route exact path="/pages/blog" element={<Blog />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

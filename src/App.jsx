import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './pages/Layout';

function App() {
  return (
    <Router>

      {/* 라우팅 정의 */}
      <Routes>
  <Route element={<Layout />}>
    <Route index element={<Home />} /> {/* 바로 여기! */}
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Route>
</Routes>

    </Router>
  );
}

export default App;

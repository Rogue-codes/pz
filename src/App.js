import Navigation from "./Components/Navigation";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Components/views/Home';
import Products from './Components/views/Products';
import Careers from './Components/views/Careers';
import Featured from './Components/views/Featured';
import Blog from './Components/views/Blog';
import Support from './Components/views/Support';
import Footer from "./Components/views/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/careers" element={<Careers/>}/>
          <Route path="/feature" element={<Featured/>}/>
          <Route path="/support" element={<Support/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
        <Footer/>
      </Router> 
    </div>
  );
}

export default App; 

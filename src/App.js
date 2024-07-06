import './App.css';
// import Navbar from './common/Navbar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import ResumeGenerator from './pages/ResumeGenerator';


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="*" element={<Error />} /> */}
        <Route path="/" element={<Home />} />
        <Route path='/resume-generator' element={<ResumeGenerator />} />
      </Routes>
    </div>
  );
}

export default App;

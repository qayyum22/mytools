import './App.css';
import Form from './Form';
import Navbar from './common/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Form />
    </div>
  );
}

export default App;

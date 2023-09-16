import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
function App() {
  return (
    <>
      <Navbar />
      <div className="conatainer d-flex align-items-center justify-content-center">
        <Shop />
      </div>

    </>
  );
}

export default App;

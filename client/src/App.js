import Navbar from './Components/Navbar'
import './App.css'
import Landing from './Components/Landing';
import Service from './Components/Service';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Service/>
      <Footer/>
    </div>
  );
}

export default App;

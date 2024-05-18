// App.js
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';


const App = () => {

  return (
    <div className="App">
      <Header />
          <Outlet />
          <Footer/>
    </div>
  );
};

export default App;

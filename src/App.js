import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
// import Main from './Components/Main';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      {/* <Main/> */}
      <Footer/>
    </div>
  );
}

export default App;

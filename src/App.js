import './App.css';
import React from "react"
import ReactDOM from "react-dom"
import About from "./components/About"
import Info from "./components/Info"
import Footer from "./components/Footer"

function Page() {
  return (
    <div className="App">
      <div className='aboutMe'>
            <About />
            <Info />
            <Footer />
        </div>
    </div>
  );
}




ReactDOM.createRoot(document.getElementById('root')).render(<Page />);

export default Page;

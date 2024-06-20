import { useEffect, useState } from "react";
import './index.css';
function App() {

  const getMode = () => {
    const initialMode = localStorage.getItem("mode");
    if (initialMode == null) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return true
      } else {
        return false;
      }
    } else {
      return JSON.parse(localStorage.getItem("mode"));
    }
  }

  const [dark, setDark] = useState(getMode());

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark))
  }, [dark])

  return (
    <div className={dark ? "app dark-mode" : "app"}>
      <header className="header">
        <div className="container">
          <div className="nav">
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
            <label className="switch">
              <input
                type="checkbox"
                onChange={() => setDark(!dark)}
                checked={dark}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </header>
      <div className="content">
        <div className="container">
          <h1>{dark ? "Dark mode is activated" : "Light mode is activated"}</h1>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-item">
              <img src="image/1.jpg" alt="" />
              <h2>Car 1</h2>
            </div>
            <div className="card-item">
              <img src="image/2.jpg" alt="" />
              <h2>Car 2</h2>
            </div>
            <div className="card-item">
              <img src="image/3.jpg" alt="" />
              <h2>Car 3</h2>
            </div>
            <div className="card-item">
              <img src="image/4.jpg" alt="" />
              <h2>Car 4</h2>
            </div>
          </div>

          <div className="card">
            <div className="card-item">
              <img src="image/5.jpg" alt="" />
              <h2>Car 5</h2>
            </div>
            <div className="card-item">
              <img src="image/6.jpg" alt="" />
              <h2>Car 6</h2>
            </div>
            <div className="card-item">
              <img src="image/7.jpg" alt="" />
              <h2>Car 7</h2>
            </div>
            <div className="card-item">
              <img src="image/8.jpg" alt="" />
              <h2>Car 8</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

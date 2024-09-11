import { Link } from "react-router-dom";
import logo from '../letter-q.png';
import '../styles/navbar.css';



const Navbar = () => {




  return (
    <div>
      <header id="nav-menu" className="nav-menu" aria-label="navigation bar">
        <div className="container">
          <div className="nav-start">
            <Link to={"/"}>
              <img src={logo} width="35" height="35" alt="Q" />
            </Link>
            <nav className="menu">
              <ul className="menu-bar">
                <li>
                  <button
                    className="nav-link dropdown-btn"
                    data-dropdown="dropdown1"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-label="browse"
                    onClick={() => document.getElementById('dropdown1').classList.toggle('active')}
                  >
                    Apps
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msFilter: "" }}><path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"></path></svg>
                  </button>
                  <div id="dropdown1" className="dropdown">
                    <ul className="menu">
                      <li role="menuitem">
                        <Link className="dropdown-link" to="/web-scraper">
                          <img src="./assets/icons/botd.svg" alt="icon" className="icon" />
                          <div>
                            <span className="dropdown-link-title">Web Scraper</span>
                            <p>scrapes data from the internet</p>
                          </div>
                        </Link>
                      </li>
                      <li role="menuitem">
                        <Link className="dropdown-link" to="/code-assistant">
                          <img src="./assets/icons/botd.svg" alt="icon" className="icon" />
                          <div>
                            <span className="dropdown-link-title">Code Assistant</span>
                            <p>your own Code Assistant</p>
                          </div>
                        </Link>
                      </li>
                      <li role="menuitem">
                        <Link className="dropdown-link" to="/flowchart">
                          <img src="./assets/icons/botd.svg" alt="icon" className="icon" />
                          <div>
                            <span className="dropdown-link-title">Flowchart Generator</span>
                            <p>get your own flowchart</p>
                          </div>
                        </Link>
                      </li>
                      <li role="menuitem">
                        <Link className="dropdown-link" to="/llmops">
                          <img src="./assets/icons/botd.svg" alt="icon" className="icon" />
                          <div>
                            <span className="dropdown-link-title">LLM Ops Tool</span>
                            <p>Get your LLM data labelled</p>
                          </div>
                        </Link>
                      </li>
                      <li role="menuitem">
                        <Link className="dropdown-link" to="/flowchart">
                          <img src="./assets/icons/botd.svg" alt="icon" className="icon" />
                          <div>
                            <span className="dropdown-link-title">Live Markdown Preview</span>
                            <p>Correct your Markdown code</p>
                          </div>
                        </Link>
                      </li>
                      
                      <li role="menuitem">
                        <Link className="dropdown-link" to="/image-generator">
                          <img src="./assets/icons/botd.svg" alt="icon" className="icon" />
                          <div>
                            <span className="dropdown-link-title">Image Generator</span>
                            <p>generates images from text</p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <button
                    className="nav-link dropdown-btn"
                    data-dropdown="dropdown2"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-label="discover"
                    onClick={() => document.getElementById('dropdown2').classList.toggle('active')}
                  >
                    Services
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msFilter: "" }}><path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"></path></svg>
                  </button>
                  <div id="dropdown2" className="dropdown">
                    <ul role="menu">
                      <li>
                        <span className="dropdown-link-title">Browse Categories</span>
                      </li>
                      <li role="menuitem">
                        <Link className="dropdown-link" to="/llms">
                          Finetuning LLMs
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-link" to={"/web-apps"}>
                          Web Apps with AI Integrations
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li><Link className="nav-link" to={"/shop"}>Shop</Link></li>
                <li><Link className="nav-link" to={"/portfolio"}>Portfolio</Link></li>
                <li><Link className="nav-link" to={"/about"}>About</Link></li>
              </ul>
            </nav>
          </div>
          <div className="nav-end">
            <div className="right-container">
              <form className="search" role="search">
                <input type="search" name="search" placeholder="Search" style={{ paddingLeft: '40px' }} />
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ color: "grey", position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', fill: "rgba(0, 0, 0, 1)" }}><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
              </form>
              <button className="btn btn-primary">Search</button>
            </div>

            <button
              id="hamburger"
              aria-label="hamburger"
              aria-haspopup="true"
              aria-expanded="false"
              className="hamburger"
              onClick={() => document.getElementsByClassName('nav-menu')[0].classList.toggle('show')}
              // style={{ display: 'none' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msFilter: "" }}><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};


export default Navbar;


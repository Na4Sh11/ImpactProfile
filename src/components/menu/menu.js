import React, { useEffect } from "react";
import "./menu.css";
import About from "../../components/about/about";
import check1 from "../../assets/image/check1.jpeg";
import Carousel from "../../components/carousel/carousel";
import Home from "../home/home";
import Search from "../search/search";

const Menu = () => {
  useEffect(() => {
    const indicator = document.querySelector(".nav-indicator");
    const items = document.querySelectorAll(".nav-item");

    function handledIndicator(el) {
      items.forEach((item) => {
        item.classList.remove("is-active");
        item.removeAttribute("style");
      });

      indicator.style.width = `${el.offsetWidth}px`;
      indicator.style.left = `${el.offsetLeft}px`;
      indicator.style.backgroundColor = el.getAttribute("active-color");

      el.classList.add("is-active");
      el.style.color = el.getAttribute("active-color");
    }

    items.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        handledIndicator(e.target);
      });
    }, []);
  });

  const handleclick=()=>{
      return(
          <div onClick={About}>
              {/* <About/> */}
          </div>
      );
  }

  return (
    <div>
      <div>
        <nav className="nav">
          <ul>
            <a
              href="#home_info"
              className="nav-item is-avtive"
              active-color="orange"
            >
              Home
            </a>

            <a
              href="#nm"
              className="nav-item"
              active-color="green"
              s
              onClick={About}
            >
              About
            </a>

            <a href="#" className="nav-item is-avtive" active-color="orange">
              Impact
            </a>

            <a href="#" className="nav-item is-avtive" active-color="orange">
              Mentor
            </a>
          </ul>

          {/* <a href="#" className="nav-item is-avtive" active-color="orange">
                        Home
                    </a>
                    <a href="/About" className="nav-item" active-color="green">
                        About
                    </a>
                    <a href="#"  className="nav-item" active-color="red">
                        Impact
                    </a>
                    <a href="#" className="nav-item" active-color="purple">
                        Mentor
                    </a> */}
          <span className="nav-indicator" />
        </nav>
        <Search />
        <div className="home-about-div">
          <Home />
        </div>
      </div>
      <div id="home_info">
        <Carousel />
      </div>
      {/* <div id="nm" className="nm">
                
                <About/>
            </div>         */}
    </div>
  );
          }

export default Menu;

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  MoveIn,
  MoveOut,
  Sticky,
} from "react-scroll-motion";

import "./App.css";
import Laptop from "./img/laptop.png";
import MarvelApp from "./img/Marvel.png";
import VintedApp from "./img/Vinted.png";
import ChatApp from "./img/Chat App.png";

function App() {
  const firefly = [];
  const calendar = [];
  const list = [
    0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167,
    205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210,
    211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92, 131, 132,
    133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217, 177, 218,
    259, 55, 56, 96, 97, 137, 138, 178, 179, 219, 220, 260, 261, 217, 218, 259,
    260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100, 102, 103, 140, 141,
    144, 181, 182, 185, 222, 223, 225, 226, 263, 264, 265, 266, 304, 305, 306,
    24, 25, 65, 66, 67, 106, 107, 108, 147, 148, 149, 150, 188, 189, 229, 230,
    270, 271, 311, 312, 67, 108, 149, 150, 191, 232, 192, 233, 274, 234, 275,
    316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33, 34, 74, 75, 115, 116,
    156, 157, 197, 198, 238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78,
    79, 80, 118, 119, 159, 160, 161, 162, 200, 201, 202, 203, 241, 242, 282,
    283, 284, 285, 323, 324, 325, 326,
  ];
  for (let i = 0; i < 15; i++) {
    firefly.push("");
  }
  for (let i = 0; i < 365; i++) {
    calendar.push(i);
  }
  return (
    <ScrollContainer>
      <ScrollPage className="dark" style={{ height: "100vh" }} page={0}>
        <Animator
          style={{ height: "100%", width: "101vw" }}
          animation={batch(FadeIn(), Sticky(), MoveOut(0, 1000))}
        >
          <div className="salutation-box dark">
            <h1>Hi</h1>
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator
          style={{ height: "100%", width: "208vh" }}
          animation={batch(Fade(), Sticky(), MoveIn(100, 0))}
        >
          <h2 className="name">I'm Konate Hassane</h2>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator
          style={{ height: "101vh", width: "101vw" }}
          animation={batch(Fade(), Sticky(), MoveIn(0, 1000))}
        >
          <div className="jobTitleContainer dark">
            <h2 className="jobTitle">a FullStack Web Developer</h2>
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <Animator
          style={{ height: "100%", width: "208vh" }}
          animation={batch(Fade(), Sticky(), MoveIn(4000, 0), MoveOut())}
        >
          <div className="projectAnnoncement white">
            <h2>Here are some of my projects</h2>
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage
        style={{ overflowY: "scroll" }}
        className="overflowScroll"
        page={4}
      >
        <div className="project dark">
          <Animator animation={batch(Fade(), MoveIn(-750, 0))}>
            <div className="laptop">
              <img src={Laptop} alt="laptop" />
              <div className="laptopScreen">
                <img src={VintedApp} alt="Vinted App" className="laptopApp" />
              </div>
            </div>
          </Animator>
          <div className="projectDetail">
            <Animator animation={batch(Fade(), MoveIn(1300, 0))}>
              <h1 className="projectTitle">Vinted</h1>
            </Animator>
            <Animator animation={batch(Fade(), MoveIn(1300, 0))}>
              <p className="projectDesc">
                This is a SCRUD app with responsive design. With this vinted
                clone you will be able to Create an account, Create offers, Sort
                offers, Search for a specific offer, and the most important
                thing buy cloth. In order to realise this website I used React,
                Stripe payment , Js-Cookies, MongoDB, Axios, React-range, NodeJS
                and Netlify.
              </p>
            </Animator>
            <Animator animation={MoveIn(1300, 0)}>
              <button
                onClick={() => {
                  window.location.href = "https://vintedclone-hk.netlify.app/";
                }}
                className="projectButton"
              >
                Learn More
              </button>
            </Animator>
          </div>
          <div className="wrapper">
            {firefly.map((ele, index) => {
              console.log(index, "hi");
              return <div key={index}></div>;
            })}
          </div>
        </div>
      </ScrollPage>
      <ScrollPage style={{ overflowY: "scroll" }} page={5}>
        <div className="projectRev dark">
          <Animator animation={batch(Fade(), MoveIn(750, 0))}>
            <div className="laptop">
              <img src={Laptop} alt="laptop" />
              <div className="laptopScreen">
                <img src={MarvelApp} alt="" className="laptopApp" />
              </div>
            </div>
          </Animator>
          <div className="projectDetail">
            <Animator animation={batch(Fade(), MoveIn(-1300, 0))}>
              <h1 className="projectTitle">Marvel</h1>
            </Animator>
            <Animator animation={batch(Fade(), MoveIn(-1300, 0))}>
              <p className="projectDesc">
                This is a SCRUD app with responsive design. With this marvel app
                you will able to Add any character and/or any comics you like
                into your favory. You can remove it at anytime in case you don't
                like it anymore and search for a specific comics or a character.
                For this App I used React, Js-cookies, MongoDB, Axios, NodeJS
                and Netlify.
              </p>
            </Animator>
            <Animator animation={batch(MoveIn(-1300, 0))}>
              <button
                onClick={() => {
                  window.location.href = "https://marvel-hk.netlify.app/";
                }}
                className="projectButton"
              >
                Learn More
              </button>
            </Animator>
          </div>
          <div className="wrapper">
            {firefly.map((ele, index) => {
              console.log(index, "hi");
              return <div key={index}></div>;
            })}
          </div>
        </div>
      </ScrollPage>
      <ScrollPage style={{ overflowY: "scroll" }} page={6}>
        <div className="project dark">
          <Animator animation={batch(Fade(), MoveIn(-750, 0))}>
            <div className="laptop">
              <img src={Laptop} alt="laptop" />
              <div className="laptopScreen">
                <img
                  style={{ height: "100%", border: "none", objectFit: "cover" }}
                  src={ChatApp}
                  alt="Vinted App"
                  className="laptopApp"
                />
              </div>
            </div>
          </Animator>
          <div className="projectDetail">
            <Animator animation={batch(Fade(), MoveIn(1300, 0))}>
              <h1 className="projectTitle">Messenger</h1>
            </Animator>
            <Animator animation={batch(Fade(), MoveIn(1300, 0))}>
              <p className="projectDesc">
                This is a Chat app. Using this application, you will be able to
                Create an account, search for some friends, and send them text
                messages and images as well. Don't worry each message missed
                will be save, and as soon as you log in, you will be able to
                read it. Video call be add soon. To realize that application I
                used React, Firebase, SaSS and Netlify.
              </p>
            </Animator>
            <Animator animation={batch(Fade(), MoveIn(1300, 0))}>
              <button
                onClick={() => {
                  window.location.href = "https://messenge-hk.netlify.app/";
                }}
                className="projectButton"
              >
                Learn More
              </button>
            </Animator>
          </div>
          <div className="wrapper">
            {firefly.map((ele, index) => {
              return <div key={index}></div>;
            })}
          </div>
        </div>
      </ScrollPage>
      <section className="githubContainer">
        <h1 className="githubTitle">Want to see all projects?</h1>
        <div className="githubChart">
          <div className="dates">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Agu</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
          <div
            onClick={() => {
              window.location.href = "https://github.com/hkonate";
            }}
            className="boxContainer"
          >
            {calendar.map((ele) => {
              return (
                <div
                  className={list.includes(ele) ? "box active" : "box"}
                  key={ele}
                ></div>
              );
            })}
          </div>
          <h1 className="githubTitle">ON GITHUB</h1>
        </div>
      </section>
    </ScrollContainer>
  );
}

export default App;

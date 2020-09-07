import React, { useEffect, useRef, useState } from "react";
import Landing from "./Landing/Landing";
import Header from "./header/header";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faJsSquare,
  faReact,
  faNodeJs,
  faCss3,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAt,
  faChevronDown,
  faChevronRight,
  faChevronLeft,
  faDatabase,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faGithub,
  faLinkedin,
  faAt,
  faChevronDown,
  faChevronRight,
  faChevronLeft,
  faJsSquare,
  faDatabase,
  faReact,
  faNodeJs,
  faCss3,
  faTimesCircle,
  faDiscord
);

function App() {
  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const [isSticky, setSticky] = useState(false);

  const stickyRef = useRef(null);
  const handleScroll = () => {
    window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
      ? setSticky(true)
      : setSticky(false);
  };

  const debounce = (func, wait = 10, immediate = true) => {
    let timeOut;
    return () => {
      let context = this,
        args = arguments;
      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  window.addEventListener("scroll", debounce(handleScroll));

  return (
    <div className="App">
      <main>
        <Header sticky={isSticky} />
        <Landing stickyRef={stickyRef} />
      </main>
    </div>
  );
}

export default App;
/**
 * faGitHub,
  faLinkedin,
  faAt,
  faChevronDown,
  faChevronRight,
  faChevronLeft,
  faJsSquare,
  faDatabase,
  faReact,
  faNodeJs,
  facss3,
 */

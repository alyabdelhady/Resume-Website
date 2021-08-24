import React from "react";
import "./Works.css";
import { useState } from "react";

function Works() {
  const [click2, setClick2] = useState(false);
  const workClick = () => setClick2(!click2);

  const [click3, setClick3] = useState(false);
  const work2Click = () => setClick3(!click3);

  const [click4, setClick4] = useState(false);
  const work4Click = () => setClick4(!click4);

  const [click5, setClick5] = useState(false);
  const work5Click = () => setClick5(!click5);

  return (
    <div className="work-container">
      <div className="work-part1">
        <h1 className="h-work1">Apps</h1>
        <div className="app1">
          <img className="work-img" src="a4.jpg" alt="" />
          <h3 className="h-app1">Weather App</h3>
          <input
            className={click2 ? "seemore-active" : "seemore"}
            type="submit"
            value="See More"
            onClick={workClick}
          />
          <p className={click2 ? "p-weather-active" : "p-weather"}>
            This application takes the city name and country, then it displays
            some values that describes the city weather such as temperature and
            humidity, as well, it returns the country code. These values were
            obtained from an existing API that was invoked in the application.
            This application was built using HTML, CSS, JS and React JS
          </p>
          <input
            className={click2 ? "seeless" : "seeless-active"}
            type="submit"
            value="See Less"
            onClick={workClick}
          />
        </div>
        <div className="app2">
          <img className="work-img2" src="a3.jpg" alt="" />
          <h3 className="h-app2">Todo app</h3>
          <input
            className={click3 ? "seemore-active" : "seemore"}
            type="submit"
            value="See More"
            onClick={work2Click}
          />
          <p className={click3 ? "p-weather-active" : "p-weather"}>
            This application forms a simple todo list, that used to add and
            delete new todo items.This application was built using HTML, CSS, JS
            and React JS.
          </p>
          <input
            className={click3 ? "seeless" : "seeless-active"}
            type="submit"
            value="See Less"
            onClick={work2Click}
          />
        </div>
      </div>
      <div className="work-part2">
        <h1 className="h-work">Templates</h1>
        <div className="temp1">
          <img className="work-img4" src="a2.jpg" alt="" />
          <img className="work-img3" src="a1.jpg" alt="" />

          <h3 className="h-app3">Resume Website </h3>
          <input
            className={click4 ? "seemore-active" : "seemore"}
            type="submit"
            value="See More"
            onClick={work4Click}
          />
          <p className={click4 ? "p-weather-active" : "p-weather"}>
            This application takes the city name and country, then it displays
            some values that describes the city weather such as temperature and
            humidity, as well, it returns the country code. These values were
            obtained from an existing API that was invoked in the application.
            This application was built using HTML, CSS, JS and React JS
          </p>
          <input
            className={click4 ? "seeless" : "seeless-active"}
            type="submit"
            value="See Less"
            onClick={work4Click}
          />
        </div>
        <div className="temp2">
          <img className="work-img4" src="a6.jpg" alt="" />
          <img className="work-img3" src="a5.jpg" alt="" />

          <h3 className="h-app3">Template website</h3>
          <input
            className={click5 ? "seemore-active" : "seemore"}
            type="submit"
            value="See More"
            onClick={work5Click}
          />
          <p className={click5 ? "p-weather-active" : "p-weather"}>
            This application takes the city name and country, then it displays
            some values that describes the city weather such as temperature and
            humidity, as well, it returns the country code. These values were
            obtained from an existing API that was invoked in the application.
            This application was built using HTML, CSS, JS and React JS
          </p>
          <input
            className={click5 ? "seeless" : "seeless-active"}
            type="submit"
            value="See Less"
            onClick={work5Click}
          />
        </div>
      </div>
    </div>
  );
}

export default Works;

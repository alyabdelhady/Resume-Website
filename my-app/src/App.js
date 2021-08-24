import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Content from "./Component/Content/Content";
import About from "./Component/About/About";
import Resume from "./Component/Resume/Resume";
import Works from "./Component/Works/Works";
import Testimonials from "./Component/Testimonials/Testimonials";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Content} />
          <Route path="/ABOUT" exact component={About} />
          <Route path="/RESUME" exact component={Resume} />
          <Route path="/WORKS" exact component={Works} />
          <Route path="/TESTIMONIALS" exact component={Testimonials} />
          <Route path="/CONTACT" exact component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

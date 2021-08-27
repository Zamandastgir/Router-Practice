import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../screens/Home";
import Aboute from "../screens/Aboute";
import BlogsShow from "../screens/BlogsShow";
import Blog from "../screens/Blog";
import Contact from "../screens/Contact";
import Portfolio from "../screens/Portfolio";
import Resume from "../screens/Resume";

function Navigation() {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/aboute" component={Aboute} />
      <Route path="/blog" component={Blog} />
      <Route path="/blogshow" component={BlogsShow} />
      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/resume" component={Resume} />
    </Switch>
  );
}

export default Navigation;

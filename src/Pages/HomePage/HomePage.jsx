import React, { Component } from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import HomeGround from "./HomeGround";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar title={"title"} />
        <HomeGround />
        <Footer
          title={"footer title tbd"}
          description={"some random description this will be changed in future"}
        />
      </div>
    );
  }
}

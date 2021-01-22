import React, { Component } from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar title={"title"} />
        <Footer />
      </div>
    );
  }
}

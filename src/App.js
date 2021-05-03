import React from "react";
import Card from "../Components/Card";
import "./styles.css";
import "../public/w3.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="w3-container">
        <div className="w3-row">
          <h1 className="w3-header w3-center w3-indigo">
            My Covid19 Tracker in React
          </h1>
        </div>
        <div className="w3-row-padding w3-stretch">
          <Card cardHeading="Confirmed Cases" backgroundColor="w3-blue" />
          <Card cardHeading="Recoverd Cases" backgroundColor="w3-green" />
          <Card cardHeading="Critical Cases" backgroundColor="w3-red" />
          <Card cardHeading="Deaths" backgroundColor="w3-orange" />
        </div>
      </div>
    );
  }
}

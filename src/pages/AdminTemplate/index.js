import React, { Component } from "react";
import { Outlet } from "react-router-dom";

export default class AdminTemplate extends Component {
  render() {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
}

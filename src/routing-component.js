import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./screens/home";
import SignIn from "./screens/sign-in/sign-in";
import Question from "./screens/question";
import Dashboard from "./screens/dashboard/dashboard";
import AboutUs from "./screens/about-us/about-us";

export default function RoutingComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/sign-in" exact element={<SignIn/>} />
        <Route path="/about-us" exact element={<AboutUs/>} />
        <Route path="/question" exact element={<Question/>} />
        <Route path="/my-dashboard" exact element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

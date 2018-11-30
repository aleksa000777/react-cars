import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter as Router } from "react-router-dom";
import { CarDetails } from "../components";

require("jest-localstorage-mock");
require("matchmedia-polyfill");
require("matchmedia-polyfill/matchMedia.addListener");

configure({ adapter: new Adapter() });

const vehicle = {
  id: "19XFC2F59GE2276732016",
  make: "Honda",
  mileage: 35292,
  model: "Civic Sedan",
  modelYear: "2016",
  productFinancials: []
};

it("renders without crashing CarDetails", () => {
  mount(
    <Router>
      <CarDetails vehicle={vehicle} />
    </Router>
  );
});

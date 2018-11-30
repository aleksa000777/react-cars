import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Routes from "../app";

require("jest-localstorage-mock");
require("matchmedia-polyfill");
require("matchmedia-polyfill/matchMedia.addListener");

configure({ adapter: new Adapter() });

describe("app", () => {
  it("renders without crashing", () => {
    mount(<Routes />);
  });
});

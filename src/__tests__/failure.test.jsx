import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Failure from "../components/Failure";
import { history } from "../utils";

require("jest-localstorage-mock");
require("matchmedia-polyfill");
require("matchmedia-polyfill/matchMedia.addListener");

configure({ adapter: new Adapter() });

it("renders without crashing Failure", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Failure />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const originalHistory = global.history;
global.history = { push: jest.mock() };

test("back to main page", () => {
  const failure = shallow(<Failure />);
  failure.find("button").simulate("click");
  expect(history.location.pathname).toEqual("/");
  global.history = originalHistory;
});

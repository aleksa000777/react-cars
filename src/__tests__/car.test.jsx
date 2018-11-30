import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import ReactDOM from "react-dom";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Car } from "../pages";

require("jest-localstorage-mock");
require("matchmedia-polyfill");
require("matchmedia-polyfill/matchMedia.addListener");

configure({ adapter: new Adapter() });

it("renders without crashing Car", () => {
  const div = document.createElement("div");
  ReactDOM.render(Car, div);
  ReactDOM.unmountComponentAtNode(div);
});

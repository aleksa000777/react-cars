import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import ReactDOM from "react-dom";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { CarsListing } from "../pages";

require("jest-localstorage-mock");
require("matchmedia-polyfill");
require("matchmedia-polyfill/matchMedia.addListener");

configure({ adapter: new Adapter() });

it("renders without crashing CarListing", () => {
  const div = document.createElement("div");
  ReactDOM.render(CarsListing, div);
  ReactDOM.unmountComponentAtNode(div);
});

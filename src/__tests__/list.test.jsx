import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter as Router } from "react-router-dom";
import { List } from "../components";

require("jest-localstorage-mock");
require("matchmedia-polyfill");
require("matchmedia-polyfill/matchMedia.addListener");

configure({ adapter: new Adapter() });

const vehicle = { id: "1" };
const data = { state: { filtered: false, favorite: {} } };
const filterData = () => {};

it("renders without crashing List", () => {
  mount(
    <Router>
      <List vehicle={vehicle} data={data} filterData={filterData} />
    </Router>
  );
});

test("List has car's ID", () => {
  const wrapper = mount(
    <Router>
      <List vehicle={vehicle} data={data} filterData={filterData} />
    </Router>
  );

  expect(wrapper.find('[href="/car/1"]').length).toBe(1);
});

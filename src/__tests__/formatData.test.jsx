import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import { formatData } from "../utils";

const data = {
  body_style: "LX"
};

it("convert data to camelCase", () => {
  expect(formatData(data)).toEqual({ bodyStyle: "LX" });
});

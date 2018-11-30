import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import { moneyConvert } from "../utils";

it("convert cents in money format", () => {
  expect(moneyConvert(100)).toBe("$1.00");
});

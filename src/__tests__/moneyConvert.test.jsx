import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import { moneyConvert } from "../utils";

it("convert cent in money", () => {
  expect(moneyConvert(100)).toBe("$1.00");
});

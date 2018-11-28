import { Container } from "unstated";

export default class DataVehicles extends Container {
  constructor() {
    super();
    this.state = {
      favorite: {},
      filtered: false
    };
  }

  handleCheckbox = (e, vin) => {
    this.state.favorite[vin] = e.target.checked;
  };

  filter = e => {
    this.state.filtered = e.target.checked;
  };
}

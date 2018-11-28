import { Container } from "unstated";

export default class DataVehicles extends Container {
  constructor() {
    super();
    this.state = {
      favorite: {}
    };
  }

  handleCheckbox = (e, vin) => {
    this.state.favorite[vin] = e.target.checked;
  };
}

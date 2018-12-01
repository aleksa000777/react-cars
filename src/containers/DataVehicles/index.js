import { Container } from "unstated";

export default class DataVehicles extends Container {
  constructor() {
    super();
    this.state = {
      favorite: {},
      filtered: false,
      sliderValue: []
    };
  }

  handleCheckbox = (e, vin) => {
    if (vin) this.state.favorite[vin] = e.target.checked;
    else this.state.filtered = e.target.checked;
  };

  onSliderChange = e => {
    this.state.sliderValue = e;
  };
}

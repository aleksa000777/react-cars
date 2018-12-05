import React, { Component } from "react";
import defaultCar from "../../images/defaultCar.png";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: props.src
    };
  }

  addDefaultSrc = () => {
    this.setState({ src: defaultCar });
  };

  render() {
    const { alt, className } = this.props;
    const { src } = this.state;
    return (
      <img
        onError={this.addDefaultSrc}
        alt={alt}
        src={src}
        className={className}
      />
    );
  }
}

export default Image;

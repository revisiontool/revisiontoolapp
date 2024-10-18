import React, { Component } from "react";

import { Crisp } from "crisp-sdk-web";

class CrispChat extends Component {
  componentDidMount () {
    Crisp.configure("44d3158a-9511-4387-ad9e-f0c1f6444c62");
  }

  render () {
    return null;
  }
}
export default CrispChat
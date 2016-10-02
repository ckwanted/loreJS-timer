import React, { Component, PropTypes } from 'react';

export default class Timer extends Component {

  static propTypes = {
    start : React.PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      elapsed : 0
    };

    this.tick = this.tick.bind(this);
  }

  /*
   * Se ejecuta antes de que este montado el DOM
   */
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  /*
   * Se ejecuta después de que sea montado el DOM
   */
  componentDidMount() {
    this.timer = setInterval(this.tick, 50);
  }

  tick() {
    this.setState({
      elapsed : new Date() - this.props.start
    });
  }

  render() {

    let elapsed = Math.round(this.state.elapsed / 100);
    let seconds = (elapsed / 10).toFixed(1);

    return (
      <p>Este ejemplo se inició hace <b>{seconds}</b> segundos</p>
    )
  }
}

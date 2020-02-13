import React, { Component } from 'react';
import Restaurant from './restaurant';

export default class App extends Component {
  state = {
    value: 0,
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: 0,
  //   };
  // }

  componentDidMount() {
    console.log('Did mount');
    // this.setState({
    //   value: this.state.value + 1,
    // })
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  }

  componentDidUpdate() {
    console.log('Did update', this.state.value);
  }

  componentWillUnmount() {
    console.log('Did unmount');
  }

  render() {
    const { restaurants } = this.props;
    return restaurants.map(restaurant => (
      <Restaurant restaurant={restaurant} key={restaurant.id} />
    ));
  }
}

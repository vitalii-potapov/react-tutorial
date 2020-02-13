import React, { Component } from 'react';

export default class ReviewForm extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Add your review:</p>
        <input type={'text'} />
      </form>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
  };
}

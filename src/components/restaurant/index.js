import React, { Component } from 'react';
import { Typography } from 'antd';
import Menu from '../menu';
import ReviewForm from '../review-form';

export default class Restaurant extends Component {
  render() {
    const { restaurant } = this.props;
    return (
      <div>
        <Typography.Title level={2}>{restaurant.name}</Typography.Title>
        <ReviewForm />
        <Menu menu={restaurant.menu} />
      </div>
    );
  }
}

import React from 'react';
// import React, { useEffect } from 'react';
import { Card, Typography, Button } from 'antd';
import amount from '../../decorators/amount';

const { Text } = Typography;

function Dish(props) {
  // useEffect(() => {
  //   console.log('Apply Effect');
  // });

  const { dish, amount, increase, decrease } = props;
  return (
    <div>
      <Card tile={dish.name}>
        <Text>{dish.ingredients.join(', ')}</Text>
        <br />
        <Text underline>${dish.price}</Text>
        <br />
        <Text>{amount}</Text>&nbsp;
        <Button onClick={decrease}>-</Button>
        <Button onClick={increase}>+</Button>
      </Card>
    </div>
  );
}

export default amount(Dish);

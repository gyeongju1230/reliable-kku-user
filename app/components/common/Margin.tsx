import React from 'react';
import {View} from 'react-native';

interface MarginProps {
  height: number;
  width: number;
}

const Margin = (props: MarginProps) => {
  return <View style={{height: props.height, width: props.width}} />;
};

export default Margin;

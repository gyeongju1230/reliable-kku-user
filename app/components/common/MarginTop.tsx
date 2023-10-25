import React from 'react';
import {View} from 'react-native';

interface MarginProps {
  height: number;
}

const MarginTop = (props: MarginProps) => {
  return <View style={{height: props.height}} />;
};

export default MarginTop;

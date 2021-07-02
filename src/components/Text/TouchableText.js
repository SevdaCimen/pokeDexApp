import {Text, TouchableOpacity} from 'react-native';

import React from 'react';

export const TouchableText = ({wrapStyle,text, textStyle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={wrapStyle}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

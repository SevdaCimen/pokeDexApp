import React from 'react';
import Block from '../Block/Block';
import {colors} from '../../theme';

export const Card = ({color, style, shadow, children, ...props}) => {
  const cardStyles = [style];
  return (
    <Block
      shadow={shadow}
      color={color || colors.white}
      style={cardStyles}
      {...props}>
      {children}
    </Block>
  );
};

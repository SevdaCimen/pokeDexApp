import {StyleSheet, Text} from 'react-native';
import {colors, fonts} from '../../theme';

import React from 'react';

export const HeaderText = ({title, style}) => {
  const {titleStyle} = styles;
  return <Text style={[titleStyle, style]}>{title}</Text>;
};

export const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 24,
    color: colors.black,
    textAlign: 'left',
    fontFamily: fonts.Montserrat,
    paddingTop:20,
    paddingBottom:10,
  },
});

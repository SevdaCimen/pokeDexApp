import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {buttonShadow, colors, fonts, sizes} from '../../theme';

import {Block} from '../Block';
import React from 'react';
import {UIIcon} from '../Icon';

const ButtonWithImage = ({
  onPress,
  color,
  icon,
  title,
  fullSize,
  alignRight,
  alignLeft,
  containerStyle,
  textStyle,
  iconColor,
  iconSize,
}) => {
  const {container, leftIconWrapper, text, rightIconWrapper} = styles;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        container,
        containerStyle,
        buttonShadow,
        fullSize && {width: '95%'},
        {backgroundColor: color},
      ]}>
      {alignLeft && (
        <View style={leftIconWrapper}>
          <UIIcon onPressDisabled name={icon} color={iconColor} size={iconSize} />
        </View>
      )}
      <Text style={[text, textStyle]}>{title}</Text>
      {alignRight && (
        <Block right block style={rightIconWrapper}>
          <UIIcon onPressDisabled name={icon} color={iconColor} size={iconSize} />
        </Block>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    flexDirection: 'row',
    height: sizes.buttonHeight,
    borderRadius: sizes.borderRadius,
  },
  text: {
    color: colors.white,
    fontSize: 19,
    fontFamily: fonts.Montserrat,
    textAlign: 'center',
    width: '100%',
    
  },
  rightIconWrapper: {
    alignItems: 'flex-end',
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftIconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    left: '75%',
  },
});
export {ButtonWithImage};

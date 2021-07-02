import * as React from 'react';

import {StyleSheet, TouchableOpacity} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/AntDesign';
import {colors} from '../../theme';

export const UIIcon = ({
  style,
  name,
  size = 25,
  color = colors.white,
  backColor = colors.white,
  withBorder,
  onIconPress,
  onPressDisabled = false,
  wrapperStyle,
  simple,
  ionIcons,
}) => {
  const styles = StyleSheet.create({
    backStyle: {
      backgroundColor: backColor,
      borderRadius: size == 100 ? 100 : 30,
      width: size + 20,
      height: size + 20,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {},
      shadowOpacity: 0.15,
      shadowRadius: 3,
      elevation: 9,
    },
  });
  const {backStyle} = styles;
  return (
    <TouchableOpacity
      disabled={onPressDisabled}
      style={withBorder && [backStyle, wrapperStyle]}
      onPress={onIconPress}>
      {simple ? (
        <SimpleLineIcons style={style} name={name} size={size} color={color} />
      ) : (
        <MaterialCommunityIcons
          style={style}
          name={name}
          size={size}
          color={color}
        />
      )}
    </TouchableOpacity>
  );
};

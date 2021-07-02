import * as theme from '../../theme';

import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { colors, fonts, shadow, sizes } from '../../theme';

import { Block } from '../Block';
import React from 'react';

const ContainerButton = ({
  title,
  onPress,
  color = colors.purple,
  disabled,
  loading,
  containerStyle,
  textColor = colors.white,
  mediumSize
}) => {
  const { container, disabledContainer, titleStyle } = styles;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}>
      <Block flex={false}
        style={[
          container,
          shadow,
          containerStyle,
          color && { backgroundColor: color },
          !loading && disabled && disabledContainer,
          mediumSize && { width: '45%' },
        ]}
      >

        {loading ? (
          <ActivityIndicator color={theme.colors.white} />
        ) : (
          <Text style={[titleStyle, { color: textColor }]}> {title}</Text>
        )}
      </Block>
    </TouchableOpacity>


  );
};

export { ContainerButton };

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes.buttonHeight,
    borderRadius: sizes.borderRadius,
    opacity: 0.7,
    width: '100%',
  },
  titleStyle: {
    fontFamily: fonts.Montserrat_Bold,
    fontSize: 17,
    textAlign: 'center',
    color: colors.darkBlue

  },
  disabledContainer: {
    backgroundColor: theme.colors.white,
  },

});

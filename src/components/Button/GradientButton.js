import * as theme from '../../theme';

import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import {colors, fonts, shadow, sizes} from '../../theme';

import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

const GradientButton = ({
  title,
  onPress,
  color = colors.darkPurple,
  disabled=false,
  loading,
  containerStyle,
  textColor = colors.white,
  mediumSize,
  softColor = colors.orangeSoft,
  darkColor = colors.orange,
  hasImage,
  labelStyle,
  imageSource,
}) => {
  const {container, disabledContainer, titleStyle} = styles;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[container, containerStyle, mediumSize && {width: '45%'}]}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[softColor, darkColor, softColor]}
        style={[
          container,
          shadow,
          containerStyle,
          color && {backgroundColor: color},
          !loading && disabled && disabledContainer,
          mediumSize && {width: '45%'},
        ]}>
        {hasImage && <Image source={imageSource} />}
        {loading ? (
          <ActivityIndicator color={theme.colors.white} />
        ) : (
          <Text style={[titleStyle, labelStyle, {color: textColor}]}>
            {title}
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export {GradientButton};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes.buttonHeight,
    borderRadius: sizes.borderRadius,
    // opacity: 0.7,
    width: '100%',
  },
  titleStyle: {
    fontFamily: fonts.Montserrat,
    fontSize: 18,
    textAlign: 'center',
    color: colors.darkBlue,
  },
  disabledContainer: {
    backgroundColor: theme.colors.white,
  },
});

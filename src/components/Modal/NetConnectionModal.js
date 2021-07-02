import {Dimensions, Image, StyleSheet, Text} from 'react-native';

import {Block} from '../Block';
import {ModalComponent} from './ModalComponent';
import React from 'react';
import {colors} from '../../theme';

const { width } = Dimensions.get("screen");

export const NetConnectionModal = ({
  onPress,
  visible,
  message,
  title = 'WARNING',
  imageSource,
  hasImage,
}) => {
  const {text, wrapper, img} = styles;
  return (
    <ModalComponent
      onPress={onPress}
      title={title}
      isVisible={visible}
      disableExit
      customCardStyle={wrapper}>
      <Block center middle spaceEvenly>
        {hasImage ? <Image source={imageSource} style={img} /> : null}
        <Text style={text}>{message}</Text>
      </Block>
    </ModalComponent>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // height: height / 2.2,
    // width: width - 50,
    height: '70%',
    width: width - 70,
  },
  text: {
    fontSize: 16,
    margin: 20,
    textAlign: 'center',
    color: colors.black,
  },
  img: {width: 200, height: 200, resizeMode: 'contain'},
});

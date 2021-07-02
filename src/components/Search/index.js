import {colors, fonts, shadow} from '../../theme';

import {Block} from '../Block';
import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native';
import {UIIcon} from '../Icon';

export const Search = ({
  style,
  searchFunc,
  placeholder,
  value,
  small,
  iconColor = colors.orangeSoft,
  onPressDelete,
}) => {
  const {wrapper, container, input} = styles;
  return (
    <Block
      shadow
      style={[wrapper, style, shadow, small && {marginHorizontal: 30}]}
      flex={false}>
      <Block center row flex={false} style={container}>
        <UIIcon name={'magnify'} color={iconColor} size={25} />
        <TextInput
          style={input}
          placeholder={placeholder}
          onChangeText={text => searchFunc(text)}
          value={value}
        />
        {value !== null && (
          <UIIcon
            name={'close'}
            color={iconColor}
            size={25}
            onIconPress={onPressDelete}
          />
        )}
      </Block>
    </Block>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    height: 50,
    marginHorizontal: 20,
  },
  container: {
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal: 8,
    backgroundColor: colors.white,
    borderColor: colors.transparent,
    height: '100%',
  },
  input: {
    color: colors.gray1,
    fontFamily: fonts.Montserrat,
    fontSize: 15,
    textAlign: 'left',
    fontWeight: '500',
    paddingLeft: 10,
    width: '85%',
  },
});

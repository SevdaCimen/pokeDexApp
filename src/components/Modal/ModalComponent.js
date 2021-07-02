import {ScrollView, StyleSheet, Text} from 'react-native';
import {colors, fonts} from '../../theme';

import {Block} from '../Block';
import {Card} from '../Card';
import Modal from 'react-native-modal';
import React from 'react';
import {UIIcon} from '../Icon';

export const ModalComponent = ({
  onPress,
  title,
  isVisible,
  customCardStyle,
  children,
  titleStyle,
  disableExit = false,
  scrollable = false,
  hasBackdrop=true,
  swipeDirection="down"
}) => {
  const {cardStyle, exitIcon, labelStyle, childBlock} = styles;
  return (
    <Modal
      hasBackdrop={hasBackdrop}
      propagateSwipe={true}
      swipeDirection={swipeDirection}
      onSwipeComplete={onPress}
      onBackdropPress={ onPress}
      animationType={'slide'}
      isVisible={isVisible}>
      <Block middle center flex={false}>
        <Card shadow flex={false} style={[cardStyle, customCardStyle]}>
          <Block row flex={false} center middle style={{top: 10}}>
            <Text style={[labelStyle, titleStyle]}>{title}</Text>
            {!disableExit && (
              <UIIcon
                name={'close'}
                size={25}
                simple
                color={colors.textBlack}
                onIconPress={onPress}
                style={exitIcon}
              />
            )}
          </Block>
          <Block flex={false} center middle style={{flex: 1}}>
            {scrollable ? (
              <ScrollView style={{flex: 1}}>{children}</ScrollView>
            ) : (
              <Block flex={false} style={childBlock}>
                {children}
              </Block>
            )}
          </Block>
        </Card>
      </Block>
    </Modal>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    height: 300,
    width: '80%',
    borderRadius: 10,
    paddingTop: 10,
  },
  exitIcon: {right: 25},
  labelStyle: {
    textAlign: 'center',
    fontSize: 20,
    width: '100%',
    fontFamily: fonts.Montserrat,
    color: colors.black,
  },
  childBlock: {flex: 1, width: '100%'},
});

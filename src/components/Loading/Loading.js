import React from 'react';
import {colors} from '../../theme';
import {Modal, View} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';

export const Loading = (props) => {
  const {visible, backgroundColor, indicatorColor} = props;
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      supportedOrientations={['portrait']}
      onRequestClose={() => {}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: backgroundColor,
        }}>
        <View
          style={{
            width: 70,
            height: 70,
            backgroundColor: colors.white,
            borderRadius: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SkypeIndicator color={colors[indicatorColor]} />
        </View>
      </View>
    </Modal>
  );
};

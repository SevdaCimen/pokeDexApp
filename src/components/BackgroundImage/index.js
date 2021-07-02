import {Dimensions, Image} from 'react-native';

import {AppIcons} from '../../theme';
import React from 'react';

const {width, height} = Dimensions.get('screen');

export const UIBackgroundImage = ({
  source = AppIcons.backImage.back,
  style,
}) => {
  return (
    <Image
      source={source}
      style={[
        {
          width: width,
          height: height,
          resizeMode: 'cover',
          position: 'absolute',
        },
        style,
      ]}
    />
  );
};

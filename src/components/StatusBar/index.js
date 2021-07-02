import { StatusBar, StyleSheet, View } from "react-native";

import React from "react";

export const UIStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={[styles.statusBar, backgroundColor]}>
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle="dark-content"
        {...props}
      />
    </View>
  );
};

const BAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: BAR_HEIGHT,
  },
});

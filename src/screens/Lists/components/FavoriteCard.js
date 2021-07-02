import { Block, UIIcon } from "../../../components";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { colors, fonts } from "../../../theme";

import React from "react";

const { width } = Dimensions.get("screen");

export const FavoriteCard = ({ item, navigation, type }) => {
  const { box, label, fullWidth } = styles;

  return (
    <Block flex={false} row style={fullWidth}>
      <TouchableOpacity
        style={box}
        onPress={() =>
          navigation.navigate("PokeInfo", {
            infoLink: "https://pokeapi.co/api/v2/pokemon/" + item.id,
            id: item.id,
          })
        }
      >
        <UIIcon
          name={type == 1 ? "handball" : "heart"}
          color={colors.purple}
          size={30}
        />
        <ScrollView alwaysBounceVertical>
          <Text numberOfLines={3} style={label}>
            {item.name.toUpperCase()}
          </Text>
        </ScrollView>
      </TouchableOpacity>
    </Block>
  );
};

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: colors.purple,
    backgroundColor: "rgba(255, 255, 255,0.6)",
    height: 60,
    padding: 10,
    width: "89%",
    flexDirection: "row",
    alignItems: "center",
  },

  label: {
    fontSize: 16,
    fontFamily: fonts.Montserrat,
    paddingLeft: 5,
    color: colors.black,
  },
  fullWidth: {
    width: width,
  },
});

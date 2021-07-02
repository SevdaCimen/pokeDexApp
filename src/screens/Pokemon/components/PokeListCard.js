import { Block, Card, UIIcon } from "../../../components";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors, fonts } from "../../../theme";

import React from "react";
import { useNavigation } from "@react-navigation/native";

export const PokeListCard = ({ data, themeColor = "#91b5f8" }) => {
  const navigation = useNavigation();

  const onClick = async () => {
    navigation.navigate("PokeInfo", {
      infoLink: data.url,
      id: data.id,
    });
  };
  const { wrapper, container, card, title, logoBlock } = styles;

  return (
    <TouchableOpacity onPress={() => onClick()} style={wrapper}>
      <Block flex={false} style={container}>
        <Card shadow style={card}>
          <Block row flex={false} center style={logoBlock}>
            <UIIcon name={"pokemon-go"} color={colors.white} size={40} />
          </Block>
          <Block row center spaceBetween style={{ width: "95%" }}>
            <ScrollView alwaysBounceVertical>
              <Text style={title}>{data.name.toUpperCase()}</Text>
            </ScrollView>
          </Block>
        </Card>
      </Block>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  wrapper: { marginTop: 20 },
  container: {
    height: 70,
    marginHorizontal: 20,
  },
  card: {
    opacity: 0.8,
    justifyContent: "space-between",
    height: 70,
    borderRadius: 10,
    borderWidth: 0.5,
    flexDirection: "row",
    borderTopLeftRadius: 1,
    borderBottomLeftRadius: 1,
    width: "100%",
    borderColor: colors.purple,
  },
  title: {
    textAlign: "left",
    paddingLeft: 5,
    color: colors.black,
    fontFamily: fonts.Montserrat,
    fontSize: 17,
    fontWeight: "500",
  },
  logoBlock: {
    width: "14%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    left: -10,
    paddingLeft: 3,
    backgroundColor: colors.purple,
  },
});

import { AppImages, colors, fonts } from "../../theme";
import { Block, UIIcon } from "../../components";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import React from "react";
import { translate } from "../../functions/translate";

var options = [
  {
    index: 1,
    label: "myCatchedPokes",
    navigateTo: "UserList",
    type: 1,
  },
  {
    index: 2,
    label: "myFavorites",
    navigateTo: "UserList",
    type: 2,
  },
];
const ProfileScreen = (props) => {
  const {
    box,
    optionText,
    pokeImg,
    wrapper,
    label,
    topBlock,
    subBlock,
    headerBlock,
    touchStyle,
  } = styles;
  return (
    <Block flex={false} style={wrapper}>
      <Block top flex={false} style={headerBlock}>
        <UIIcon
          name={"format-list-bulleted"}
          color={colors.black}
          size={30}
          onIconPress={() => props.navigation.navigate("PokeList")}
        />
      </Block>
      <Block center middle style={topBlock}>
        <Text style={label}>{translate("myProfile")}</Text>
      </Block>
      <Block center middle style={subBlock}>
        {options.map((element, index) => {
          return (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate(element.navigateTo, {
                  type: element.type,
                  label: element.label,
                })
              }
              key={index}
              style={touchStyle}
            >
              <Block row key={index} center flex={false} style={box}>
                <Image
                  source={AppImages.intro.pokeBall_Transparent}
                  style={pokeImg}
                />
                <Text style={optionText}> {translate(element.label)}</Text>
              </Block>
            </TouchableOpacity>
          );
        })}
      </Block>
    </Block>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.Montserrat,
    fontSize: 24,
    fontWeight: "500",
    color: colors.textBlack,
    marginHorizontal: 20,
    textAlign: "center",
  },
  topBlock: {
    flexGrow: 1,
  },
  box: {
    borderWidth: 0.8,
    marginVertical: 8,
    marginHorizontal: 30,
    borderRadius: 10,
    borderColor: colors.white,
    height: 75,
    padding: 10,
  },
  optionText: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.Montserrat,
    fontWeight: "500",
    left: 30,
  },
  pokeImg: {
    width: 90,
    height: 74,
    left: -10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  logoutBtn: { width: "80%" },
  homeBlock: {
    flexGrow: 0.45,
    alignItems: "flex-end",
    marginHorizontal: 10,
  },
  wrapper: { flex: 1, backgroundColor: colors.purpleSoft },
  contentBlock: {
    flexGrow: 3.5,
    backgroundColor: colors.white,
  },
  labelBlock: {
    flexGrow: 0.5,
  },
  subBlock: {
    flexGrow: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: colors.gray1,
  },
  headerBlock: {
    alignItems: "flex-end",
    width: "100%",
    padding: 10,
  },
  touchStyle: {
    width: "100%",
  },
});

import { AppImages, colors, fonts } from "../../theme";
import { Block, GradientButton } from "../../components";
import { Dimensions, Image, StyleSheet, Text } from "react-native";

import { FinishIntro } from "../../redux/actions/auth";
import React from "react";
import { translate } from "../../functions/translate";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const IntroScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  const next = async () => {
    await dispatch(FinishIntro());
    navigation.navigate("PokeList");
  };
  
  const {
    imgBlock,
    imageStyle,
    textBlock,
    header,
    paragraph,
    btnBlock,
  } = styles;
  return (
    <>
      <Block block>
        <Block center middle style={imgBlock}>
          <Image source={AppImages.intro.pokeIntro} style={imageStyle} />
        </Block>

        <Block center middle flex={false} style={textBlock}>
          <Text style={header}>{translate("introHead")}</Text>
          <Text style={paragraph}>{translate("introContent")} </Text>
          <Block flex={false} bottom style={btnBlock}>
            <GradientButton title={translate("start")} onPress={() => next()} />
          </Block>
        </Block>
      </Block>
    </>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  imgBlock: { width, flexGrow: 4 },
  imageStyle: { width, resizeMode: "contain", height: "100%" },
  header: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.black,
    fontFamily: fonts.Montserrat,
    paddingBottom: 10,
    width: "100%",
    textAlign: "center",
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
    color: colors.gray2,
    lineHeight: 30,
    marginHorizontal: 30,
    fontFamily: fonts.Montserrat,
    fontWeight: "500",
  },
  textBlock: {
    flexGrow: 1,
    width,
  },
  btnBlock: { width: "70%", flexGrow: 0.25 },
});

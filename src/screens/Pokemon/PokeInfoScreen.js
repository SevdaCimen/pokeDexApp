import {
  ActivityIndicator,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import { AppImages, colors, fonts } from "../../theme";
import {
  Block,
  ButtonWithImage,
  Card,
  GradientButton,
  UIIcon,
  UIStatusBar,
} from "../../components";
import {
  PokeAddFavorite,
  PokeCatch,
  PokeRelease,
  PokeRemoveFavorite,
} from "../../redux/actions/poke";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { showMessage } from "react-native-flash-message";
import { translate } from "../../functions/translate";
import { useConstructor } from "../../functions/contructorCall";

const { width } = Dimensions.get("window");

const PokeInfoScreen = (props) => {
  const poke = useSelector((state) => state.poke);

  const [favoriteStatus, setFavoriteStatus] = useState(false);
  const [pokeStatus, setPokeStatus] = useState(false);
  const [pokeInfo, setPokeInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useConstructor(async () => {
    if (props.route.params) {
      var response = await axios.get(props.route.params.infoLink);
      if (response) {
        setPokeInfo(response.data);
        if (poke.favPokeList) {
          var match = poke.favPokeList.find((x) => x.id === response.data.id);
          if (match) setFavoriteStatus(true);
        }
      }
    }

    if (poke.catchedPokeList) {
      var catchedMatch = poke.catchedPokeList.find(
        (x) => x.id === props.route.params.id
      );
      if (catchedMatch) setPokeStatus(true);
    }
  });

  const addFavorite = async () => {
    setLoading(true);
    var data = {
      id: pokeInfo.id,
      name: pokeInfo.name,
    };
    //REMOVE FROM FAVORİTES
    if (favoriteStatus) {
      await dispatch(PokeRemoveFavorite(data));
      setFavoriteStatus(false);
      showMessage({
        message: translate("pokeRemovedMsg"),
        type: "default",
        duration: 1500,
      });
      setLoading(false);
    }
    //ADD TO FAVORİTES
    else {
      await dispatch(PokeAddFavorite(data));
      setFavoriteStatus(true);
      showMessage({
        message: translate("pokeAddMsg"),
        type: "success",
        duration: 1500,
      });
      setLoading(false);
    }
  };

  const changePokeStatus = async () => {
    setLoading(true);

    var data = {
      id: pokeInfo.id,
      name: pokeInfo.name,
    };
    //RELEASE POKEMON
    if (pokeStatus) {
      await dispatch(PokeRelease(data));
      setPokeStatus(false);
      setLoading(false);
    }
    //CATCH POKEMON
    else {
      await dispatch(PokeCatch(data));
      setPokeStatus(true);
      setLoading(false);
    }
  };
  const {
    headImgContainer,
    logoutBlock,
    wrapper,
    cardStyle,
    topBlock,
    selectedTabText,
    textBlock,
    contentText,
    headImg,
    btnStyle,
    btnBlock,
  } = styles;

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: pokeStatus ? colors.orangeSoft : colors.blueSoft2 },
      ]}
    >
      <UIStatusBar
        backgroundColor={pokeStatus ? colors.orangeSoft : colors.blueSoft2}
      />

      <Block flex={false} center style={headImgContainer}>
        <Image
          source={
            pokeStatus
              ? AppImages.intro.pokeBall_Transparent
              : AppImages.intro.pokeBall_open
          }
          style={headImg}
        />
      </Block>
      <Block flex={false} style={logoutBlock}>
        <UIIcon
          name={favoriteStatus ? "heart" : "heart-plus-outline"}
          withBorder
          size={23}
          backColor={favoriteStatus ? colors.rose : colors.blue}
          onIconPress={() => addFavorite()}
          style={{ zIndex: 0 }}
        />
      </Block>

      <Block flex={false} style={{ flexGrow: 0.75 }} />
      <Block style={{ flexGrow: 2.8 }}>
        <Card style={cardStyle}>
          {pokeInfo === null ? (
            <Block style={{ flexGrow: 2 }}>
              <ActivityIndicator color={colors.orange} />
            </Block>
          ) : (
            <>
              <Block shadow center row flex={false} style={topBlock}>
                <Text style={selectedTabText}>
                  {pokeInfo.name.toUpperCase()}
                </Text>
              </Block>

              <ScrollView>
                <Block style={textBlock}>
                  <Text style={contentText}>
                    {translate("weight")} :{pokeInfo.weight}
                  </Text>
                  <Text style={contentText}>
                    {translate("baseExperience")}: {pokeInfo.base_experience}
                  </Text>

                  {pokeInfo.types.map((element, index) => {
                    return (
                      <Text style={contentText} key={index}>
                        {translate("type")} :{element.type.name}
                      </Text>
                    );
                  })}

                  {pokeInfo.moves.map((element, index) => {
                    return (
                      <Text style={contentText} key={index}>
                        {translate("moves")} :{element.move.name}
                      </Text>
                    );
                  })}
                </Block>
              </ScrollView>
            </>
          )}

          <Block center middle flex={false} style={btnBlock}>
            <GradientButton
              title={pokeStatus ? translate("release") : translate("catch")}
              loading={loading}
              darkColor={pokeStatus ? colors.orange : colors.nightBlue}
              softColor={pokeStatus ? colors.orangeSoft : colors.blueSoft}
              onPress={() => changePokeStatus()}
              containerStyle={btnStyle}
            />
          </Block>
        </Card>
      </Block>
    </SafeAreaView>
  );
};

export default PokeInfoScreen;

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: colors.white },
  headImg: { width: 200, height: 200, resizeMode: "contain" },
  headImgContainer: {
    position: "absolute",
    width,
  },
  logoutBlock: {
    alignItems: "flex-end",
    marginHorizontal: 10,
    marginVertical: 10,
  },

  cardStyle: {
    flexGrow: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 0.5,
    borderBottomColor: colors.transparent,
    borderColor: colors.gray3,
    width: "100%",
  },
  topBlock: {
    height: 65,
    borderColor: colors.transparent,
    borderBottomColor: colors.gray3,
    borderWidth: 0.5,
  },
  selectedTabText: {
    fontSize: 17,
    fontFamily: fonts.Montserrat,
    lineHeight: 26,
    color: colors.orange,
    fontWeight: "500",
    width: "90%",
    textAlign: "center",
    marginHorizontal: 20,
  },
  textBlock: {
    marginHorizontal: 25,
    fontFamily: fonts.Montserrat,
  },
  contentText: {
    color: colors.gray1,
    lineHeight: 24,
    fontSize: 16,
    paddingTop: 20,
    lineHeight: 26,
    textAlign: "justify",
  },
  btnStyle: { width: "80%" },
  btnBlock: { marginVertical: 20 },
});

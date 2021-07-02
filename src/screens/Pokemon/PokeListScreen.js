import { ActivityIndicator, FlatList, StyleSheet, Text } from "react-native";
import { AppImages, colors } from "../../theme";
import {
  Block,
  HeaderText,
  Search,
  UIBackgroundImage,
  UIIcon,
  UIStatusBar,
} from "../../components";
import React, { useEffect, useState } from "react";

import { POKEAPI } from "../../theme/urls";
import { PokeListCard } from "./components";
import axios from "axios";
import { translate } from "../../functions/translate";

const PokeListScreen = (props) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState(null);
  const [fullList, setFullList] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [noData, setNoData] = useState(false);

  useEffect(async () => {
    setLoadingData(true);
    await getData();
  }, []);

  const getData = async () => {
    var response = await axios.get(POKEAPI.allList);
    setPokemonList(response.data.results);
    setFullList(response.data.results);
    setLoadingData(false);
  };

  const searchFunc = (term) => {
    setSearchTerm(term);
    var filterListData = fullList.filter((item) =>
      item.name.toLowerCase().match(term.toLowerCase())
    );
    if (filterListData.length == 0) setNoData(true);
    setPokemonList(filterListData);
  };

  const renderCards = ({ item, index }) => {
    return (
      <Block flex={false} key={index}>
        <PokeListCard data={item} />
      </Block>
    );
  };

  const { noContentLabel, listBlock, contentBlock, topBlock } = styles;

  return (
    <Block block>
      <UIStatusBar backgroundColor={colors.purpleSoft} />
      <UIBackgroundImage source={AppImages.profile.profileBack} />
      <Block row spaceBetween center flex={false} style={topBlock}>
        <HeaderText title={translate("pokemonList")} />
        <UIIcon
          name={"account-outline"}
          color={colors.purple_night}
          size={30}
          onIconPress={() => props.navigation.navigate("Profile")}
        />
      </Block>
      <Block row center flex={false}>
        <Search
          style={{ width: "90%" }}
          searchFunc={searchFunc}
          value={searchTerm}
          iconColor={colors.purple}
          onPressDelete={async () => {
            setSearchTerm(null);
            await getData();
          }}
        />
      </Block>
      <Block style={listBlock}>
        <Block>
          <Block style={contentBlock}>
            {pokemonList.length > 0 && Array.isArray(pokemonList) ? (
              <FlatList
                showsVerticalScrollIndicator={true}
                data={pokemonList}
                keyExtractor={(item, index) => String(index)}
                renderItem={renderCards}
              />
            ) : (
              <Block flex={false} style={contentBlock}>
                {noData && (
                  <Text style={noContentLabel}>{translate("noMatch")}</Text>
                )}
                {loadingData && (
                  <ActivityIndicator color={colors.purple_night} />
                )}
              </Block>
            )}
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default PokeListScreen;

const styles = StyleSheet.create({
  noContentLabel: {
    color: colors.gray1,
    textAlign: "center",
    fontSize: 15,
    top: 30,
  },
  listBlock: {
    flexGrow: 7,
    zIndex: 1,
  },
  contentBlock: {
    flexGrow: 3.5,
    marginHorizontal: 10,
    width: "95%",
  },
  topBlock: { marginHorizontal: 25, bottom: 20 },
});

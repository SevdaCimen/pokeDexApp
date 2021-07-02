import { AppImages, colors } from "../../theme";
import {
  Block,
  HeaderText,
  Search,
  UIBackgroundImage,
  UIStatusBar,
} from "../../components";
import { FlatList, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";

import { FavoriteCard } from "./components";
import { translate } from "../../functions/translate";
import { useSelector } from "react-redux";

const UserListScreen = (props) => {
  const poke = useSelector((state) => state.poke);

  const [searchTerm, setSearchTerm] = useState(null);
  const [fullList, setFullList] = useState([]);
  const [listData, setListData] = useState([]);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    if (props.route.params) {
      if (props.route.params.type == 1) {
        setListData(poke.catchedPokeList);
        setFullList(poke.catchedPokeList);
        setNoData(poke.catchedPokeList.length == 0 ? true : false);
      } else {
        setListData(poke.favPokeList);
        setFullList(poke.favPokeList);
        setNoData(poke.favPokeList.length == 0 ? true : false);
      }
    }
  };
  const searchFunc = (term) => {
    setSearchTerm(term);
    var filterListData = fullList.filter((item) =>
      item.name.toLowerCase().match(term.toLowerCase())
    );
    if (filterListData.length == 0) setNoData(true);
    setListData(filterListData);
  };
  const renderCards = ({ item, index }) => {
    return (
      <Block flex={false} key={index}>
        <FavoriteCard
          item={item}
          navigation={props.navigation}
          type={props.route.params.type}
        />
      </Block>
    );
  };
  const { noContentLabel, wrapper, listContainer, topBlock } = styles;

  return (
    <Block style={wrapper}>
      <UIStatusBar backgroundColor={colors.purpleSoft} />
      <UIBackgroundImage source={AppImages.profile.profileBack} />
      <Block flex={false} left style={topBlock}>
        <HeaderText title={translate(props.route.params.label)} />
      </Block>
      <Search
        searchFunc={searchFunc}
        value={searchTerm}
        onPressDelete={() => {
          setSearchTerm(null);
          getData();
        }}
        iconColor={colors.purple}
      />
      <Block style={listContainer}>
        {listData.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={true}
            data={listData}
            keyExtractor={(item, index) => String(index)}
            renderItem={renderCards}
          />
        ) : (
          <Block flex={false} style={{ flexGrow: 5 }}>
            {noData && (
              <Text style={noContentLabel}>{translate("noMatch")}</Text>
            )}
          </Block>
        )}
      </Block>
    </Block>
  );
};

export default UserListScreen;
const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  noContentLabel: {
    color: colors.gray1,
    textAlign: "center",
    fontSize: 15,
    top: 30,
  },
  headText: { textAlign: "center", color: colors.gray1 },
  listBlock: {
    flexGrow: 7,
    zIndex: 1,
  },
  contentBlock: {
    flexGrow: 3.5,
    marginHorizontal: 10,
  },
  bottomImg: {
    height: 260,
    width: 450,
    resizeMode: "contain",
  },
  headTextBlock: { marginVertical: 20 },
  listBlock: {
    flexGrow: 5,
    zIndex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  listContainer: {
    flexGrow: 5,
    zIndex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  topBlock: {
    marginHorizontal: 25,
    bottom: 20,
    marginLeft: 20,
  },
});

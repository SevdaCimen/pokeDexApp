import * as RNLocalize from "react-native-localize";

import React, { useEffect, useState } from "react";
import { persistor, store } from "./src/redux/store";

import { AppImages } from "./src/theme";
import FlashMessage from "react-native-flash-message";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigation/Router";
import { NetConnectionModal } from "./src/components";
import NetInfo from "@react-native-community/netinfo";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "react-native-splash-screen";
import i18n from "i18n-js";
import { translate } from "./src/functions/translate";

const translationGetters = {
  en: () => require("./src/locales/en.json"),
  tr: () => require("./src/locales/tr.json"),
};

const setI18nConfig = () => {
  const fallback = { languageTag: "en" };
  const { languageTag } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;
  translate.cache.clear();
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;
};

export default function App() {
  const [noInternet, setNoInternet] = useState(false);
  // LogBox.ignoreAllLogs();

  useEffect(async () => {
    NetInfo.addEventListener((state) => {
      if (state && !state.isInternetReachable && !state.isConnected) {
        setNoInternet(true);
      }
      SplashScreen.hide();
    });
    setI18nConfig();

    try {
      RNLocalize.addEventListener("change", handleLocalizationChange());
    } catch (error) {}
    return () => {
      RNLocalize.removeEventListener("change", handleLocalizationChange());
    };
  }, []);

  const handleLocalizationChange = () => {
    setI18nConfig()
      .then(() => this.forceUpdate())
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Provider store={store}>

      {noInternet ? (
        <NetConnectionModal
          onPress={() => setNoInternet(false)}
          visible={noInternet}
          message={"Check the network connection"}
          hasImage
          imageSource={AppImages.error.noConnect}
        />
      ) : (
        <>
          <PersistGate loading={null} persistor={persistor}>
            <SafeAreaProvider>
              <NavigationContainer
                ref={(nav) => {
                  navigator = nav;
                }}
              >
                <Navigator />
              </NavigationContainer>
            </SafeAreaProvider>
            <FlashMessage position="top" floating />
          </PersistGate>
        </>
      )}
    </Provider>
  );
}

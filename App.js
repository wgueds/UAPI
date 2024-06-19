import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

import { store, persistor } from './src/store';
import Routes from './src/routes';

// import intl to number format
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function App() {
  const customFonts = {
    'CircularSpotifyTxTMed': require('./src/assets/fonts/CircularSpotifyTxTMed.otf'),
    'CircularStdBold': require('./src/assets/fonts/CircularStdBold.otf'),
    'CircularStdBook': require('./src/assets/fonts/CircularStdBook.otf'),
    'CircularStdMedium': require('./src/assets/fonts/CircularStdMedium.otf'),
    'PoppinsMedium': require('./src/assets/fonts/poppinsMedium.ttf'),
    'PoppinsRegular': require('./src/assets/fonts/PoppinsRegular.ttf')
}

  let [fontsLoaded] = useFonts(customFonts);

  if (!fontsLoaded) {
      return <AppLoading />;
  } else {
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes />
          </PersistGate>
        </Provider>
      );
  }
}
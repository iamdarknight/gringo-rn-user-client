// @flow

import React from 'react';
import { Provider } from 'react-redux';
// Ignore yellowbox warning from bug in react native which shows yellow banner during dev
import { YellowBox } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from '@gringo/components/layout';
import ApplicationNavigator from '@gringo/navigation/';
import {
  gringoStore,
  persistor,
} from '@gringo/store/';
import Theme from '@gringo/styles/global';
import Splash from '@gringo/splash/';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const App = (): React.StatelessFunctionalComponent<*> => (
  <Provider store={gringoStore}>
    <PersistGate loading={<Splash loading />} persistor={persistor}>
      <PaperProvider theme={Theme}>
        <Layout>
          <ApplicationNavigator />
        </Layout>
      </PaperProvider>
    </PersistGate>
  </Provider>
);
export default App;

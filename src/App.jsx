import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Alert, Loader } from '@/components/core';
import { default as theme } from '@/config/theme/index';
import { default as NavigationStack } from '@/navigation';
import { ErrorBoundary } from '@/screens';
import { persistor, store } from '@/store';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <PaperProvider theme={theme}>
            <StatusBar backgroundColor={theme.colors.primary} />
            <ErrorBoundary>
              <NavigationStack />
              <Alert />
              <Loader />
            </ErrorBoundary>
          </PaperProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;

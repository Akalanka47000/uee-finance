import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { Alert, Loader } from '@/components/core';
import { default as theme } from '@/config/theme/index';
import { default as NavigationStack } from '@/navigation';
import { ErrorBoundary } from '@/screens';
import { store } from '@/store';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <StatusBar backgroundColor={theme.colors.primary} />
          <ErrorBoundary>
            <NavigationStack />
            <Alert />
            <Loader />
          </ErrorBoundary>
        </PaperProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;

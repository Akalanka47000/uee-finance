import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { default as RNBootSplash } from 'react-native-bootsplash';
import { AppBar } from '@/components/core';
import theme from '@/config/theme';
import { Home } from '@/screens';
import { navigationRef } from './root';

const Stack = createNativeStackNavigator();

const onReady = () => setTimeout(() => RNBootSplash.hide(), 500);

const NavigationStack = () => {
  return (
    <NavigationContainer ref={navigationRef} onReady={onReady} theme={theme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => <AppBar title="Expense Chart" onRefresh={() => {}} />,
            animation: 'slide_from_right'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;

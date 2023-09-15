import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { default as RNBootSplash } from 'react-native-bootsplash';
import { AppBar } from '@/components/core';
import { default as theme } from '@/config/theme';
import { FileDownload } from '@/icons';
import { Home } from '@/screens';
import { downloadCurrentMonthExpenseReport } from '@/services';
import { navigationRef } from './root';
import styles from './style';

const Drawer = createDrawerNavigator();

const onReady = () => setTimeout(() => RNBootSplash.hide(), 500);

const NavigationStack = () => {
  return (
    <NavigationContainer ref={navigationRef} onReady={onReady} theme={theme}>
      <Drawer.Navigator initialRouteName="Home" screenOptions={styles.drawer}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            header: () => (
              <AppBar
                title="Expense Chart"
                actions={[
                  {
                    children: FileDownload,
                    onPress: downloadCurrentMonthExpenseReport
                  }
                ]}
              />
            ),
            animation: 'slide_from_right'
          }}
        />
        <Drawer.Screen
          name="Budgets"
          component={Home}
          options={{
            header: () => <AppBar title="Budgets" />,
            animation: 'slide_from_right'
          }}
        />
        <Drawer.Screen
          name="Subscription"
          component={Home}
          options={{
            header: () => <AppBar title="Subscription" />,
            animation: 'slide_from_right'
          }}
        />
        <Drawer.Screen
          name="Invoice Scanner"
          component={Home}
          options={{
            header: () => <AppBar title="Scan Invoice" />,
            animation: 'slide_from_right'
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;

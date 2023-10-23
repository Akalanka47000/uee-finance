import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { default as RNBootSplash } from 'react-native-bootsplash';
import { AppBar } from '@/components/core';
import { default as theme } from '@/config/theme';
import { FileDownload } from '@/icons';
import { Budgets, EBills, Home, Labels, Scanner, Subscription } from '@/screens';
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
                back={false}
              />
            ),
            animation: 'slide_from_right'
          }}
        />
        <Drawer.Screen
          name="Budgets"
          component={Budgets}
          options={{
            header: () => <AppBar title="Budgets" back={false} />,
            animation: 'slide_from_right'
          }}
        />
        <Drawer.Screen
          name="Labels"
          component={Labels}
          options={{
            header: () => <AppBar title="Labels" back={false} />,
            animation: 'slide_from_right'
          }}
        />
        <Drawer.Screen
          name="Subscription"
          component={Subscription}
          options={{
            header: () => <AppBar title="Subscription" back={false} />,
            animation: 'slide_from_right'
          }}
        />
        <Drawer.Screen
          name="Invoice Scanner"
          component={Scanner}
          options={{
            header: () => <AppBar title="Scan Invoice" back={false} />,
            animation: 'slide_from_right'
          }}
        />
        <Drawer.Screen
          name="E-Bills"
          component={EBills}
          options={{
            header: () => <AppBar title="E-Bills" back={false} />,
            animation: 'slide_from_right'
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;

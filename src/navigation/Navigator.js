import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import ManageExpense from '../screens/ManageExpense';
import AllExpenses from '../screens/AllExpenses';
import RecentExpenses from '../screens/RecentExpenses';
import {Ionicons} from '@expo/vector-icons';
import {Pressable} from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerRight: ({tintColor}) => (
          <Pressable style={({pressed}) => (pressed ? {opacity: 0.5} : null)}>
            <Ionicons name="add" size={24} color={tintColor} />
          </Pressable>
        ),
      }}>
      <Tab.Screen
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
        name="RecentExpenses"
        component={RecentExpenses}
      />
      <Tab.Screen
        options={{
          title: 'All Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
        name="AllExpenses"
        component={AllExpenses}
      />
    </Tab.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Expenses" component={TabNavigator} />
        <Stack.Screen name="ManageExpense" component={ManageExpense} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

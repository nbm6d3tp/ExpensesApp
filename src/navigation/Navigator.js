import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import ManageExpense from '../screens/ManageExpense';
import AllExpenses from '../screens/AllExpenses';
import RecentExpenses from '../screens/RecentExpenses';
import {Ionicons} from '@expo/vector-icons';
import {Pressable} from 'react-native';
import {colors} from '../constants/colors';
import IconButton from '../components/IconButton';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({navigation}) => {
        return {
          headerStyle: {
            backgroundColor: colors.primary500,
          },
          headerTintColor: 'white',
          headerRight: ({tintColor}) => (
            <IconButton
              style={{right: 10}}
              onPress={() => {
                navigation.navigate('ManageExpense', {action: 'add'});
              }}
              name="add"
              size={30}
              color={tintColor}
            />
          ),
          tabBarStyle: {backgroundColor: colors.primary500},
          tabBarActiveTintColor: colors.accent500,
          tabBarInactiveTintColor: 'white',
        };
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
          tabBarLabel: 'All',
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
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Expenses"
          component={TabNavigator}
        />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: colors.primary500},
            headerTintColor: 'white',
            presentation: 'modal',
          }}
          name="ManageExpense"
          component={ManageExpense}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

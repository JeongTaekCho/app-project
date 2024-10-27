import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './components/screens/HomeScreen';
import ShoppingScreen from './components/screens/ShoppingScreen';
import {RootStackParamList, RouteNames} from './routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BrowserScreen from './components/screens/BrowserScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const HomeIcon = ({focused, color}: {focused: boolean; color: string}) => {
  return (
    <MaterialCommunityIcons
      name={focused ? 'home' : 'home-outline'}
      color={color}
      size={26}
    />
  );
};

const ShoppingIcon = ({focused, color}: {focused: boolean; color: string}) => {
  return (
    <MaterialCommunityIcons
      name={focused ? 'shopping' : 'shopping-outline'}
      color={color}
      size={26}
    />
  );
};

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000',
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
      }}>
      <Tab.Screen
        name={RouteNames.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name={RouteNames.SHOPPING}
        component={ShoppingScreen}
        options={{
          tabBarLabel: '쇼핑',
          tabBarIcon: ShoppingIcon,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={RouteNames.HOME_TAB}
          component={HomeTab}
          options={{headerShown: false}}
        />
        <Stack.Screen name={RouteNames.BROWSER} component={BrowserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

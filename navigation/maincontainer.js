import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Library of images for nav bar icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../src/pages/HomeScreen';
import SearchScreen from '../src/pages/SearchScreen';
import SettingsScreen from '../src/pages/SettingsScreen';
import ExtraScreen from '../src/pages/DMScreen';
import ProfileScreen from '../src/pages/ProfileScreen';

//Screen names
const homeName = "Home";
const searchName = "Search";
const settingsName = "Settings";
const extraName = "Extra";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === searchName) {
              iconName = focused ? 'search' : 'search-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            else if (rn === extraName) {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            }
            else if (rn === profileName) {
              iconName = focused ? 'person' : 'person-outline';
            }

            

            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'maroon',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
          
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={searchName} component={SearchScreen} />
        <Tab.Screen name={extraName} component={ExtraScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />


      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
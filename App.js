import * as React from 'react';
import Home from './src/Components/Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Order from './src/Components/Screens/Order';
import More from './src/Components/Screens/More';
import RewardsAndOffers from './src/Components/Screens/RewardsAndOffers';
import Code from './src/Components/Screens/Code';

const Tab = createBottomTabNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'ios-home' : 'ios-home-outline';
                        } else if (route.name === 'Order') {
                            iconName = focused ? 'pizza' : 'pizza-outline';
                        } else if (route.name === 'Code') {
                            iconName = focused ? 'md-qr-code-sharp' : 'md-qr-code-outline';
                        } else if (route.name === 'More') {
                            iconName = focused
                                ? 'ellipsis-horizontal'
                                : 'ellipsis-horizontal-outline';
                        } else if (route.name === 'RewardsAndOffers') {
                            iconName = focused ? 'md-body-sharp' : 'md-body-outline';
                        }
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#ffbc0d',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false
                })}
            >
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='Order' component={Order} />
                <Tab.Screen name='RewardsAndOffers' component={RewardsAndOffers} />
                <Tab.Screen name='Code' component={Code} />
                <Tab.Screen name='More' component={More} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Order from '../../Screens/Order';
import More from '../../Screens/More';
import RewardsAndOffers from '../../Screens/RewardsAndOffers';
import Code from '../../Screens/Code';
import Home from '../../Screens/Home';
import { Text, Image } from 'react-native';
import { mcDonaldLogo } from '../../../Utils/Images';
import { frenchFriesLogo } from '../../../Utils/Images';
import { codeLogo } from '../../../Utils/Images';
import { moreLogo } from '../../../Utils/Images';
import {  rewardsLogo  } from '../../../Utils/Images';


const Tab = createBottomTabNavigator();
export default function BottomNavigation() {
    const iconChanger = (focused, route , color, size) => {
        let iconType;
        if (route.name === 'Home') {
            ; return iconType =  <Image source={{ uri: focused ? mcDonaldLogo?.mcDonaldLogoActive :  mcDonaldLogo?.mcDonaldLogoNotActive}} style={{ width: focused? 24: 36,  height: focused? 20 : 40, marginTop: 10}} />
        } else if (route.name === 'Order') {
            return iconType = <Image source={{ uri: focused ? frenchFriesLogo?.frenchFriesActive: frenchFriesLogo?.frenchFriesNotActive  }} style={{ width: focused? 28: 34, height: 25, marginTop: 13}} />;
        } else if (route.name === 'Code') {
            return iconType =  <Image source={{ uri: focused ? codeLogo?.codeLogoActive : codeLogo?.codeLogoNotActive  }} style={{ width: focused? 28: 34, height: 25, marginTop: 13}} />
        } else if (route.name === 'More') {
            return iconType = <Ionicons color={color} size={size}  style={{marginTop: 8}} name={focused ?moreLogo?.moreLogoActive : moreLogo?.moreLogoNotActive}/>
        } else if (route.name === 'Rewards&Offers') {
            return iconType =  <Image source={{ uri: focused ?  rewardsLogo?.rewardsLogoActive : rewardsLogo?.rewardsLogoNotActive}} style={{ width: focused? 28: 34, height: focused? 25 : 28, marginTop: !focused? 20: 8}} />
        }
        return iconType;
    };

    const changeLabelStyleActive = (focused, route) => {
        let label;
        switch (route.name) {
            case 'Home':
                return (label = (
                    <Text
                        style={{
                            color: focused ? 'black' : 'gray',
                            fontWeight: focused ? 'bold' : '',
                            fontSize: 11,
                             marginTop: 5
                        }}
                    >
                        {route.name}
                    </Text>
                ));
            case 'Order':
                return (label = (
                    <Text
                        style={{
                            color: focused ? 'black' : 'gray',
                            fontWeight: focused ? 'bold' : '',
                            fontSize: 11,
                             marginTop: 5
                        }}
                    >
                        {route.name}
                    </Text>
                ));
            case 'Rewards&Offers':
                return (label = (
                    <Text
                        style={{
                            color: focused ? 'black' : 'gray',
                            fontWeight: focused ? 'bold' : '',
                            fontSize: 11,
                            width: 120,
                            textAlign: 'center',
                             marginTop: 5
                        }}
                    >
                        {route.name}
                    </Text>
                ));
            case 'Code':
                return (label = (
                    <Text
                        style={{
                            color: focused ? 'black' : 'gray',
                            fontWeight: focused ? 'bold' : '',
                            fontSize: 11,
                            marginTop: 5
                        }}
                    >
                        {route.name}
                    </Text>
                ));
            case 'More':
                return (label = (
                    <Text
                        style={{
                            color: focused ? 'black' : 'gray',
                            fontWeight: focused ? 'bold' : '',
                            fontSize: 11,
                             marginTop: 5
                        }}
                    >
                        {route.name}
                    </Text>
                ));
        }
        return label;
    };
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size}) => {
                    return iconChanger(focused,  route, color, size);
                },
                tabBarActiveTintColor: '#ffbc0d',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
                tabBarLabel: ({ focused}) => {
                    return changeLabelStyleActive(focused, route);
                },
            })}
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Order' component={Order} />
            <Tab.Screen name='Rewards&Offers' component={RewardsAndOffers} />
            <Tab.Screen name='Code' component={Code} />
            <Tab.Screen name='More' component={More} />
        </Tab.Navigator>
    );
}

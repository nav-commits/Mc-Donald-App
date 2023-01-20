import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Order from '../../Screens/Order';
import More from '../../Screens/More';
import RewardsAndOffers from '../../Screens/RewardsAndOffers';
import Code from '../../Screens/Code';
import Home from '../../Screens/Home';
import { Text, Image } from 'react-native';

const Tab = createBottomTabNavigator();
export default function BottomNavigation() {
    const iconChanger = (focused, route) => {
        let iconName;
        if (route.name === 'Home') {
            iconName = focused ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png' : 'https://theamazingbrentwood.com/wp-content/uploads/2019/11/McDonalds-black.png';
        } else if (route.name === 'Order') {
            iconName = focused ? 'https://www.pngitem.com/pimgs/m/80-807106_mcdonald-s-png-mcdonalds-french-fries-icon-transparent.png' : 'https://cdn3.iconfinder.com/data/icons/food-169/100/FOOD_ICONs-01-512.png';
        } else if (route.name === 'Code') {
            iconName = focused ? 'https://expressionengine.com/asset/img/add-on-icons/mx-qrcode-y.png'  : 'https://img.vendingmarketwatch.com/files/base/cygnus/vmw/image/2011/11/vmwqrcode_10446872.png?auto=format,compress&w=500&h=281&fit=clip';
        } else if (route.name === 'More') {
            iconName = focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline';
        } else if (route.name === 'Rewards&Offers') {
            iconName = focused ?  'https://www.mcdonalds.com/content/dam/sites/usa/nfl/publication/3PUB_OneCode_Redeem_376x376.jpg' : 'https://cdn0.iconfinder.com/data/icons/restaurant-service-business/64/coupon-voucher-discount-restaurant-food-512.png'
        }
        return <Image source={{ uri: iconName }} style={{ width: focused? 28: 34, height: 25, marginTop: 10}} />;
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
                tabBarIcon: ({ focused}) => {
                    return iconChanger(focused,  route);
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

import React, { useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import BottomNavigation from './src/Components/Organisms/BottomNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetail from './src/Components/Screens/ProductDetail';

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'White',
    },
};
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator>
                <Stack.Screen
                    name='Main'
                    component={BottomNavigation}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name={'ProductDetail'} component={ProductDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

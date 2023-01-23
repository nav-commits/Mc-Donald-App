import React,{useContext } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import BottomNavigation from './src/Components/Organisms/BottomNavigation/BottomNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetail from './src/Components/Screens/ProductDetail';


// create state in a context and as the value changes pass it down to product detail name, set the state inside function in orders page for the on press function
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
                <Stack.Screen
                    name='ProductDetail'
                    component={ProductDetail}
                    options={({ route }) => ({ title: route.params.name })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

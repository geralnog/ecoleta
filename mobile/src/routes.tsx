import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import home from './pages/home';
import points from './pages/points';
import detail from './pages/detail';

const AppStack = createStackNavigator();

const Routes = () => {
    return ( 
        <NavigationContainer>
            <AppStack.Navigator 
            headerMode="none"
            screenOptions={{
            cardStyle: {
                backgroundColor: '#f0f0f5'
            }
        }}
            >
                <AppStack.Screen name="home" component={home} />
                <AppStack.Screen name="points" component={points} />
                <AppStack.Screen name="detail" component={detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
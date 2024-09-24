import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import FirstView from '../views/FirstView'
import SecondView from '../views/SecondView'
import ThirdView from '../views/ThirdView'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName

                switch (route.name) {
                    case 'FirstView':
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline'
                        break
                    case 'SecondView':
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline'
                        break
                    case 'ThirdView':
                        iconName = focused ? 'ios-list-box' : 'ios-list'
                        break
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            showLabel: true,
            // labelStyle: { fontSize: 30 }
        }} initialRouteName="SecondView">
        <Tab.Screen name="FirstView" component={FirstView}
            options={{ title: 'Inicial' }} />
        <Tab.Screen name="SecondView" component={SecondView}
            options={{ title: 'Meio' }} />
        <Tab.Screen name="ThirdView" component={ThirdView}
            options={{ title: 'Final' }} />
    </Tab.Navigator>
)
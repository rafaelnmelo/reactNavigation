import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FirstView from '../views/FirstView'
import SecondView from '../views/SecondView'
import ThirdView from '../views/ThirdView'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="FirstView"
        screenOptions={{ headerShown: true }}>
        <Stack.Screen name="FirstView" component={FirstView}
            options={{ title: 'Informações Iniciais' }} />
        <Stack.Screen name="SecondView" component={SecondView} />
        <Stack.Screen name="ThirdView" component={ThirdView} />
    </Stack.Navigator>
)
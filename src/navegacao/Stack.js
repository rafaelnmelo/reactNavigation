import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FirstView from '../views/FirstView'
import SecondView from '../views/SecondView'
import ThirdView from '../views/ThirdView'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="FirstView"
        screenOptions={{ headerShown: true }}>
        <Stack.Screen name="FirstView"
            options={{ title: 'Informações Iniciais' }} >
            {props => (
                <PassoStack {...props}
                    avancar="SecondView">
                    <FirstView />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="SecondView">
            {props => (
                <PassoStack {...props}
                    voltar
                    avancar="ThirdView"
                    avancarParams={{ numero: 1007 }}>
                    <SecondView />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="ThirdView">
            {props => (
                <PassoStack {...props}
                    voltar
                    avancar="ThirdView">
                    <ThirdView {...props} />
                </PassoStack>
            )}
        </Stack.Screen>
    </Stack.Navigator >
)
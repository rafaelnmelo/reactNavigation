import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FirstView from '../views/FirstView'
import SecondView from '../views/SecondView'
import ThirdView from '../views/ThirdView'
import FourthView from '../views/FourthView'

const Drawer = createDrawerNavigator()

export default props => (
    <Drawer.Navigator initialRouteName="TelaD">
        <Drawer.Screen name="TelaA" component={FirstView} />
        <Drawer.Screen name="TelaB" component={SecondView} />
        <Drawer.Screen name="TelaC" component={ThirdView} />
        <Drawer.Screen name="TelaD" component={FourthView} />
    </Drawer.Navigator>
)

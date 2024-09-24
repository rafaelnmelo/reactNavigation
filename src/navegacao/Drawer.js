import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FirstView from '../views/FirstView'
import SecondView from '../views/SecondView'
import ThirdView from '../views/ThirdView'
import FourthView from '../views/FourthView'

const Drawer = createDrawerNavigator()

export default props => (
    <Drawer.Navigator initialRouteName="FourthView">
        <Drawer.Screen name="FirstView" component={FirstView} />
        <Drawer.Screen name="SecondView" component={SecondView} />
        <Drawer.Screen name="ThirdView" component={ThirdView} />
        <Drawer.Screen name="FourthView" component={FourthView} />
    </Drawer.Navigator>
)

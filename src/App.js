import React from "react"
import { SafeAreaView } from "react-native"
import FirstView from "./views/FirstView"
import SecondView from "./views/SecondView"
import ThirdView from "./views/ThirdView"

export default props => (
    <SafeAreaView style={{flex: 1}}>
        <FirstView />
        <SecondView />
        <ThirdView />
    </SafeAreaView>
)
import React from 'react'
import { View, Button } from 'react-native'

export default props => (
    <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            {props.voltar
                ? <Button
                    title='Voltar'
                    onPress={() => {
                        props.navigation.goBack()
                    }}
                />
                : false
            }
            {props.avancar
                ? <Button
                    title='Avançar'
                    onPress={() => {
                        //push consegue chamar várias vezes
                        props.navigation.navigate(
                            props.avancar,
                            props.avancarParams
                        )
                    }}
                />
                : false
            }
        </View>
        <View style={{ flex: 1 }}>
            {props.children}
        </View>
    </View>
)
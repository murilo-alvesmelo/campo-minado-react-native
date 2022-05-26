import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Modal} from 'react-native'

export default props => {
    return (
        <>
            <Modal 
                onRequestClose={props.onCancel}
                visible={props.isVisible}
                animationType='slide'
                transparent={true}>
                <View style={style.frame}>
                    <View style={style.container}>
                        <Text style={style.title}>
                            Selecione o nivel: 
                        </Text>
                        <TouchableOpacity
                            style={[style.button, style.bgEasy]}
                            onPress={() => props.onLevelSelected(0.1)}>
                            <Text style={style.label}>Facil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[style.button, style.bgNormal]}
                            onPress={() => props.onLevelSelected(0.2)}>
                            <Text style={style.label}>Normal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[style.button, style.bgHard]}
                            onPress={() => props.onLevelSelected(0.3)}>
                            <Text style={style.label}>Dificil</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    )
}

const style = StyleSheet.create({
    frame:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    button:{
        marginTop: 10,
        padding: 5
    },
    label:{
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },
    bgEasy:{
        backgroundColor: 'green'
    },
    bgNormal:{
        backgroundColor: 'blue'
    },
    bgHard:{
        backgroundColor: 'red'
    }
})
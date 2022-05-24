import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
export default props => {
    return (
        <>
            <View style={style.Container}>
                <View style={style.CoreMine}/>
                <View style={style.Lines}/>
                <View style={[style.Lines, {transform: [{rotate: '45deg'}] }]}/>
                <View style={[style.Lines, {transform: [{rotate: '90deg'}] }]}/>
                <View style={[style.Lines, {transform: [{rotate: '135deg'}] }]}/>
            
            </View>
        </>
    )
}

const style = StyleSheet.create({
    Container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    CoreMine: {
        height: 14,
        width: 14,
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Lines: {
        position: 'absolute',
        height: 3,
        width: 20,
        borderRadius: 3,
        backgroundColor: 'black'
    }
})
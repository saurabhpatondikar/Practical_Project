import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
    doCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: 'rgb(255,255,255)',
        paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight : 30
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 20,
        margin: 10,
        backgroundColor: 'rgb(255,255,255)'
    },
    imageContainer: {
        flex: 0.2,

    },
    imageStyle: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    shaddowItem: {
        shadowColor: 'rgb(0,0,0)',
        elevation: 1,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5
    },
    detailContainer: {
        flex: 0.8
    },
    nameText: {
        fontSize: 13,
        color: 'rgb(0,0,0)'
    },
    emailText: {
        fontSize: 11,
        color: 'rgba(0,0,0,0.4)',
        textDecorationLine: 'underline'
    },
    flatListContainer: {
        flex: 1,
        marginHorizontal: 15,
        backgroundColor: 'rgb(255,255,255)'
    }

})
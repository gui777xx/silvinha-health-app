import { View, Text, styleSheet } from 'react-native'
import React from 'react'
import styles from '../style'

export default function ResultImc(props) {
    return (
        <View style={styles.container}>
            <text style={styles.Text}>
                {props.messageResult}
            </text>
            <text style={styles.textImc}>
                props.ResultImc
            </text>
        </View>    
        )
}
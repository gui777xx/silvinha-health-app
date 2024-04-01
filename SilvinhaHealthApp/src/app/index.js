import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Link, link } from "expo-router";


export default function welcome() {
  return (
    <View style={styles.container}>
      <Text>welcome</Text>
      <Link href="imc">
        <Text>Abrir o IMC</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    alignItems: 'center',
    justifyContent: 'center'
  }

})
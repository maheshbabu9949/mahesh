import React from 'react'
import { StyleSheet, View } from 'react-native'
import PrescibeTab from './prescibeTab'
import Reasonforvisit from './reasonforvisit'
function App() {
  return (
    <View style={styles.container}>
        {/* <Reasonforvisit></Reasonforvisit> */}
        <PrescibeTab></PrescibeTab>
    </View>
  )
}
const styles = StyleSheet.create({container:{flex:1}})
export default App
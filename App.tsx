import React from 'react'
import { StyleSheet, View } from 'react-native'
import Chat from './chat'
import PrescibeTab from './prescibeTab'
import Reasonforvisit from './reasonforvisit'
function App() {
  return (
    <View style={styles.container}>
        {/* <Reasonforvisit></Reasonforvisit> */}
        {/* <PrescibeTab></PrescibeTab> */}
        <Chat></Chat>
    </View>
  )
}
const styles = StyleSheet.create({container:{flex:1}})
export default App
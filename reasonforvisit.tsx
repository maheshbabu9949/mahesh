import React, { Component } from 'react'
import { View,Text, StyleSheet, FlatList } from 'react-native'
import { Icon } from 'react-native-elements'
import { TextInput } from 'react-native-paper'
export class reasonforvisit extends Component {
    render() {
        return (
            <View style={styles.main}>
              <View>
                  <Text style={styles.header}>Reason For Visit</Text>
                  <Text style={styles.borderbottom}></Text>
      
      
              </View>
                 <View style={[styles.drop, styles.shadowProp]}>
                      <Text  style={styles.selecttext}>
                      Select Symptoms
                      
                      </Text>
                      <Icon name="home" style={styles.icon}  color="grey" tvParallaxProperties={undefined}/>
                      
                  </View>
                  <View style={styles.dropdownlist}>
                      <View style={styles.dropdownlistline}>
                      <Text style={styles.dropdownlisttext}>Chest Pain</Text>
                      <View style={styles.dropdownlisticon}>
                      <Icon name="home"   color="white" tvParallaxProperties={undefined}/>
                      </View>
                      </View>
                      <View style={styles.dropdownlistline}>
                      <Text style={styles.dropdownlisttext}>Chest Pain</Text>
                      <View style={styles.dropdownlisticon}>
                      <Icon name="home"   color="white" tvParallaxProperties={undefined}/>
                      </View>
                      </View>
                      <View style={styles.customtextboxrow}>
                          <TextInput style={styles.customtext} placeholder='Others "Create Custom"'  placeholderTextColor='#2A97A2'></TextInput>
                          <View>
                          <View style={styles.dropdownlisticon1}><Icon name="home" style={styles.iconadd}  color="white" tvParallaxProperties={undefined}/></View>
                          <Text style={styles.Add}>ADD</Text>
                          </View>
                      </View>
                  </View>
                  <View style={[styles.drop, styles.shadowProp]}>
                      <Text  style={styles.selecttext}>
                      Chest pain
                      
                      </Text>
                      <Icon name="home" style={styles.deleteicon}  color="red" tvParallaxProperties={undefined}/>
                      
                  </View>
                  <View style={[styles.drop, styles.shadowProp]}>
                      <Text  style={styles.selecttext}>
                      Chest pain
                      
                      </Text>
                      <Icon name="home" style={styles.deleteicon}  color="red" tvParallaxProperties={undefined}/>
                      
                  </View>
                  <View style={[styles.drop, styles.shadowProp]}>
                      <Text  style={styles.selecttext}>
                      Chest pain
                      
                      </Text>
                      <Icon name="home" style={styles.deleteicon}  color="red" tvParallaxProperties={undefined}/>
                      
                  </View>
                  </View>
                  
          )
      }
    }
    const styles = StyleSheet.create({
        main:{
            backgroundColor:'white'
        },
        header: {
       
        fontSize:14,
        color:"#707070",
        fontWeight:'bold',
        width:  '50%',
        paddingHorizontal: 10,
        marginTop:10
    },  
    borderbottom:{
        width:  '28%',
        borderBottomWidth: 1,
        borderBottomColor: '#00B3D3',
        marginBottom: 30,
        marginLeft:10
    },
    drop: {
        backgroundColor: 'white',
        borderRadius: 8,
        // paddingVertical: 45,
        // paddingHorizontal: 25,
        marginHorizontal:25,
        marginVertical: 10,
        flexDirection: 'row', justifyContent: 'space-between' 
      },
      shadowProp: {
        shadowColor: '#171717',
        elevation: 20,
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
    
    // drop:{
        
        
    //     marginHorizontal:15,
    //     borderRadius:5,
    //     borderColor:'grey'
    // },
    selecttext:{
    paddingLeft:15,
    paddingBottom:20,
    paddingTop:20,
    fontSize:15,
    fontWeight:'bold'
    
    },icon:{
        paddingTop:20,
        paddingRight:10,
    fontSize:15,
    textAlign:'right'
    },
    dropdownlist:{
        backgroundColor:'white',
        paddingTop:10,
        minHeight:200,
        maxHeight:1000,
        borderRadius:6,
        marginHorizontal:25,
        marginVertical: 10,
        borderWidth:0.4,
        borderColor:'#C8C8C8',
        shadowColor: '#00000029',
        elevation: 20,
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        
    },
    dropdownlistline:{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        borderBottomWidth:0.4,
        // marginTop:10,
        paddingBottom:10
     },
    dropdownlisttext:{
    paddingLeft:15,
    paddingTop:15,
    color:'#A2A2A2',
    fontSize:15,
    },
    dropdownlisticon:{
        backgroundColor:'#2A97A2',
        marginTop:10,
        marginRight:10,
        width: 30,
        height: 30,
        borderRadius: 30/2,
    fontSize:15,
    textAlign:'center',
    justifyContent:'center'
    },
    customtextboxrow:{
        height:80,
        flexDirection: 'row', justifyContent: 'space-between' ,
    },
    customtext:{
        marginVertical:20,
        marginHorizontal:10,
        width:250,
        height:40,
        borderWidth:0.5,
        borderColor:'grey',
        borderRadius:8,
        backgroundColor:'white',
       
    
    },
    iconadd:{},
    dropdownlisticon1:{
        backgroundColor:'#2A97A2',
        marginTop:18,
        marginHorizontal:10,
        width: 30,
        height: 30,
        borderRadius: 30/2,
    fontSize:40,
    color:'white',
    textAlign:'center',
    justifyContent:'center'
    
    },
    Add:{
        paddingLeft:10,
    color:'#2A97A2',
    fontSize:15,
    fontWeight:'bold',
    },
    deleteicon:{
        paddingTop:20,
        paddingRight:10,
    fontSize:15,
    textAlign:'right'
    }
    
    
    })

export default reasonforvisit
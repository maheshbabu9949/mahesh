import React, { Component } from 'react'
import { View,Text, StyleSheet, FlatList } from 'react-native'
import { Icon, normalize } from 'react-native-elements'
import { Button, TextInput } from 'react-native-paper'
export class PrescibeTab extends Component {
    render() {
        return (
             <View style={{flex:1,minHeight:300,maxHeight:1000}}>
              <View style={styles.savetemplate}>
              <Button style={{backgroundColor:'#5E5E5E',
        borderTopStartRadius:10,
        borderBottomEndRadius:10,
        }} color='#FFFFFF' uppercase={false}   onPress={() => console.log('Pressed')}>
                Saved Templates
               </Button>
              </View>
                <View style={styles.Addmedicineview}>
                
                <Button style={styles.Addmedicine} color='#ACACAC' icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                ADD MEDICINE
               </Button>
            
               </View>
               <View style={styles.card}>
                <View style={{borderBottomWidth:0.4,borderBottomColor:'grey'}}>
                  <View style={{marginVertical:2,marginHorizontal:15,flexDirection:'row',justifyContent:'space-between'}}>
                    <View>
                      <Text style={styles.cardmaintext}>MOXIKIND CV 625MG TAB </Text>
                      <Text style={styles.cardsubtext}>Per Oral - After Food</Text>
                    </View>
                    <View>
                    <Text style={styles.cardmaintext}>1   -   0  -   1 </Text>
                      <Text style={styles.cardsubtext}>5  Days</Text>
                    </View>
                  </View>
                  <View style={{marginVertical:4,marginHorizontal:15,flexDirection:'row',justifyContent:'space-between'}}>
                  
                    <Text style={styles.allowgene}>Allow Generics: YES</Text> 
                      
                  <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                    <View>
                  <Text style={{paddingHorizontal:6}}>Refills</Text>
                  </View>
                  <View>
                  <Text style={styles.refillcount}>2</Text></View>
                  </View>
                  </View>
                </View>
                <View style={{flexDirection:'row',paddingVertical:5,paddingHorizontal:10,justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',}}>
                <Icon name="home" style={{}} color="#10C4D5" tvParallaxProperties={undefined}/>
                <Text style={{color:'#747474',fontSize:12,paddingTop:5}}>Edit</Text>
                </View>
                <View style={{flexDirection:'row',marginHorizontal:10}}>
                <Icon name="home" style={{}} color="red" tvParallaxProperties={undefined}/>
                <Text style={{color:'#747474',fontSize:12,paddingTop:5}}>Remove</Text>
                </View>
               </View>
               </View>
               <View style={styles.card}>
                <View style={{borderBottomWidth:0.4,borderBottomColor:'grey'}}>
                  <View style={{marginVertical:2,marginHorizontal:15,flexDirection:'row',justifyContent:'space-between'}}>
                    <View>
                      <Text style={styles.cardmaintext}>MOXIKIND CV 625MG TAB </Text>
                      <Text style={styles.cardsubtext}>Per Oral - After Food</Text>
                    </View>
                    <View>
                    <Text style={styles.cardmaintext}>1   -   0  -   1 </Text>
                      <Text style={styles.cardsubtext}>5  Days</Text>
                    </View>
                  </View>
                  <View style={{marginVertical:4,marginHorizontal:15,flexDirection:'row',justifyContent:'space-between'}}>
                  
                    <Text style={styles.allowgene}>Allow Generics: YES</Text> 
                      
                  <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                    <View>
                  <Text style={{paddingHorizontal:6}}>Refills</Text>
                  </View>
                  <View >
                  <Text style={styles.refillcount}>2</Text></View>
                  </View>
                  </View>
                </View>
                <View style={{flexDirection:'row',paddingVertical:5,paddingHorizontal:10,justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',}}>
                <Icon name="home" style={{}} color="#10C4D5" tvParallaxProperties={undefined}/>
                <Text style={{color:'#747474',fontSize:12,paddingTop:5}}>Edit</Text>
                </View>
                <View style={{flexDirection:'row',marginHorizontal:10}}>
                <Icon name="home" style={{}} color="red" tvParallaxProperties={undefined}/>
                <Text style={{color:'#747474',fontSize:12,paddingTop:5}}>Remove</Text>
                </View>
               </View>
               </View>
               <View style={{justifyContent:'center',backgroundColor:'#16656F',width:'90%',alignSelf:'center',height:35,borderRadius:5,marginVertical:10}}>
                <Text style={{color:'#FFFFFF',textAlign:'center'}}>PREVIEW & SUBMIT</Text>
                </View>
               
            </View>
        )
      }
    }
    const styles = StyleSheet.create({
      savetemplate:{
        alignItems:'flex-start',
        marginVertical:10,
        marginHorizontal:10,
      },
      savetemplateButton:{
        backgroundColor:'#5E5E5E',
        borderTopStartRadius:10,
        borderBottomEndRadius:10,
        // textTransform:'lowercase'
      },
        Addmedicineview:{
            alignItems:'center',
            marginVertical:10
        },
        Addmedicine:{
            width:160,
            height:40,
            borderColor:'#10C4D5',
            border:1,
            borderRadius:20,
            backgroundColor:'white',
            color:'grey',
            fontSize:12,
            fontWeight:'bold',
            borderWidth:1,
        },
        card:{
            borderBottomWidth: 0,
            shadowColor: '#171717',
            shadowOffset: { width: 2, height: 4 },
            shadowOpacity: 1,
            shadowRadius: 5,
            elevation: 5,
            marginVertical:10,
            marginHorizontal:20,
            height:125,
            backgroundColor:'#FFFFFF',
            borderRadius:5
        },
        cardmaintext:{
         color:'#000000',
         fontSize:12,
         fontWeight:'bold',
         paddingVertical:5,
        },
        cardsubtext:{
            fontSize:12,
            color:'#747474',
            fontWeight:'bold'
        },
        allowgene:{
        marginVertical:8,
        fontSize:12,
        color:'#747474',
        fontWeight:'bold'
        },
        refillcount:{
            backgroundColor:'#73C4CC',
            width:25,
            height:25,
            borderRadius:25/2,
            // borderWidth:1,
            color:'white',
            justifyContent:'center',textAlign:'center'
        }
    })

export default PrescibeTab
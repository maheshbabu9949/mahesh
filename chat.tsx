import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { TextInput } from 'react-native-paper'

export class chat extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 50, marginHorizontal: 10 }}>
                    <View style={{ flex: 1, height: 0.6, backgroundColor: '#707070' }} />
                    <View>
                        <Text style={{ width: 150, textAlign: 'center', color: '#707070', fontSize: 11 }} >Friday 05, AUG 2022</Text>
                    </View>
                    <View style={{ flex: 1, height: 0.6, backgroundColor: '#707070' }} />
                </View>
                <View style={{ marginHorizontal: 20, marginVertical: 20, alignItems: 'flex-start' }}><Text style={{ textAlign: 'left', color: '#6D767E', fontSize: 11, backgroundColor: '#E9E9E9', paddingVertical: 20, paddingHorizontal: 15, }}>Lorem Ipsum is simply dummy</Text>
                    <View style={{
                        position: "absolute",
                        left: -26,
                        top: 42,
                        width: 0,
                        height: 0,
                        borderTopColor: "transparent",
                        borderTopWidth: 13,
                        borderRightWidth: 26,
                        borderRightColor: "#E9E9E9",
                        borderBottomColor: "transparent",
                    }} ></View>
                    <Text style={{ color: '#9A9EA2' }}>10:40 AM</Text>
                </View>
                <View style={{ marginHorizontal: 20, marginVertical: 20, alignItems: 'flex-end', justifyContent: 'flex-end' }}><Text style={{ textAlign: 'center', fontSize: 11, paddingVertical: 20, paddingHorizontal: 10, backgroundColor: '#116971', color: 'white' }} >Lorem Ipsum is simply</Text>
                <View style={{
                        position: "absolute",
                        right: -26,
                        top: 42,
                        width: 0,
                        height: 0,
                        borderTopColor: "transparent",
                        borderTopWidth: 13,
                        borderLeftWidth: 26,
                        borderLeftColor: "#116971",
                        borderBottomColor: "transparent",
                    }}></View>
                    <Text style={{ color: '#9A9EA2' }}>10:40 AM</Text></View>
                <View style={{ marginHorizontal: 20, marginVertical: 20, alignItems: 'flex-start' }}><Text style={{ textAlign: 'center', color: '#6D767E', fontSize: 11, backgroundColor: '#E9E9E9', paddingVertical: 20, paddingHorizontal: 15, }}>Lorem Ipsum is simply dummy</Text>
                <View style={{
                        position: "absolute",
                        left: -26,
                        top: 42,
                        width: 0,
                        height: 0,
                        borderTopColor: "transparent",
                        borderTopWidth: 13,
                        borderRightWidth: 26,
                        borderRightColor: "#E9E9E9",
                        borderBottomColor: "transparent",
                    }} ></View>
                    <Text style={{ color: '#9A9EA2' }}>10:40 AM</Text>
                </View>
                <View style={{ marginHorizontal: 20, marginVertical: 20, alignItems: 'flex-end', justifyContent: 'flex-end', }}>

                    <Text style={{ textAlign: 'center', fontSize: 11, paddingVertical: 20, paddingHorizontal: 10, backgroundColor: '#116971', color: 'white', }} >Lorem Ipsum is simply dummy</Text>
                    <View style={{
                        position: "absolute",
                        right: -26,
                        top: 42,
                        width: 0,
                        height: 0,
                        borderTopColor: "transparent",
                        borderTopWidth: 13,
                        borderLeftWidth: 26,
                        borderLeftColor: "#116971",
                        borderBottomColor: "transparent",
                    }}></View>
                    <Text style={{ color: '#9A9EA2' }}>10:40 AM</Text>
                </View>
                <View style={{ flexDirection: 'row',marginTop:40, backgroundColor: '#F1F1F1', alignItems: 'center', flex: 1 }}>
                    <Icon name='home' tvParallaxProperties={undefined} style={{ paddingHorizontal: 20, }}></Icon>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        height: 40, width: 280, borderColor: 'gray', borderRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Icon name='home' tvParallaxProperties={undefined} ></Icon>
                        <TextInput placeholder='Type a message' placeholderTextColor='#1D252B' style={{ fontSize: 14, backgroundColor: '#FFFFFF', height: 40, width: '75%' }}></TextInput>
                        <Icon name='home' tvParallaxProperties={undefined} ></Icon>
                    </View>
                    <Icon name='home' tvParallaxProperties={undefined} style={{ paddingHorizontal: 20, }}></Icon>
                </View>
            </View>

        )
    }
}

export default chat
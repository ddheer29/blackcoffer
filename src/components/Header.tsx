import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { FC, useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { RFValue } from 'react-native-responsive-fontsize'

const Header: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'rgb(28,51,66)',
        height: 130,
        width: '100%',
        paddingTop: 68,
        paddingHorizontal: 16
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center'
        }}>
        <Ionicons
          name="menu"
          size={RFValue(20)}
          color={"#fff"}
        />
        <View style={{ backgroundColor: '#fff', width: '80%', padding: 12, height: "60%", borderRadius: 8, }}>
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder='Search'
            placeholderTextColor={'#666'}
            cursorColor={"rgb(28,51,66)"}
          />
          <View style={{ position: 'absolute', right: 10, top: 6 }}>
            <Ionicons
              name="search"
              size={RFValue(16)}
              color={"rgb(28,51,66)"}
            />
          </View>
        </View>
        <Ionicons
          name="options-outline"
          size={RFValue(18)}
          color={"#fff"}
        />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { FC, useState } from 'react'
import Header from '../components/Header'
import Ionicons from "react-native-vector-icons/Ionicons"
import { RFValue } from 'react-native-responsive-fontsize'

const ProfileScreen: FC = () => {
  const [name, setName] = useState<string>("");
  const [gender, setgender] = useState<string>("");
  const [location, setlocation] = useState<string>("");
  const [profession, setprofession] = useState<string>("");
  const [bio, setbio] = useState<string>("");
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />
      <ScrollView style={{ flexGrow: 1 }}>
        <View>
          <Image
            source={{ uri: "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp" }}
            style={{ width: '100%', height: 200, }}
          />
          <View
            style={{
              position: 'absolute',
              width: 50,
              height: 50,
              backgroundColor: '#F5F5F5',
              alignItems: "center",
              justifyContent: 'center',
              borderRadius: 100,
              bottom: -18,
              right: 30,
            }}
          >
            <Ionicons
              name="camera-outline"
              size={RFValue(22)}
              color={"#121212"}
            />
          </View>
        </View>
        <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 12 }}>
          <View>
            <Text style={{ paddingVertical: 8 }}>Name</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder='Enter you Full Name'
              placeholderTextColor={'#7C7C7C'}
              cursorColor={"rgb(28,51,66)"}
              style={{ backgroundColor: '#DCDCDC', width: '100%', padding: 12, height: 40, borderRadius: 8, }}
            />
          </View>
          <View>
            <Text style={{ paddingVertical: 8 }}>Gender</Text>
            <TextInput
              value={gender}
              onChangeText={setgender}
              placeholder='Enter you Gender'
              placeholderTextColor={'#7C7C7C'}
              cursorColor={"rgb(28,51,66)"}
              style={{ backgroundColor: '#DCDCDC', width: '100%', padding: 12, height: 40, borderRadius: 8, }}
            />
          </View>
          <View>
            <Text style={{ paddingVertical: 8 }}>Location</Text>
            <TextInput
              value={location}
              onChangeText={setlocation}
              placeholder='Enter you Location'
              placeholderTextColor={'#7C7C7C'}
              cursorColor={"rgb(28,51,66)"}
              style={{ backgroundColor: '#DCDCDC', width: '100%', padding: 12, height: 40, borderRadius: 8, }}
            />
          </View>
          <View>
            <Text style={{ paddingVertical: 8 }}>Profession</Text>
            <TextInput
              value={profession}
              onChangeText={setprofession}
              placeholder='Enter you Profession'
              placeholderTextColor={'#7C7C7C'}
              cursorColor={"rgb(28,51,66)"}
              style={{ backgroundColor: '#DCDCDC', width: '100%', padding: 12, height: 40, borderRadius: 8, }}
            />
          </View>
          <View>
            <Text style={{ paddingVertical: 8 }}>Bio</Text>
            <TextInput
              value={bio}
              onChangeText={setbio}
              placeholder='Enter you bio'
              placeholderTextColor={'#7C7C7C'}
              cursorColor={"rgb(28,51,66)"}
              multiline={true}
              style={{ backgroundColor: '#DCDCDC', width: '100%', padding: 12, height: 100, borderRadius: 8, }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
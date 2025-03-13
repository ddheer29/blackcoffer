import { Image, ScrollView, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { FC, useState } from 'react'
import Header from '../components/Header'
import Ionicons from "react-native-vector-icons/Ionicons"
import { RFValue } from 'react-native-responsive-fontsize'

const ProfileScreen: FC = () => {
  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [profession, setProfession] = useState<string>("");
  const [bio, setBio] = useState<string>("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <Header />
          <ScrollView
            style={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <View>
              <Image
                source={{ uri: "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp" }}
                style={{ width: '100%', height: 200 }}
              />
              <View style={styles.cameraIcon}>
                <Ionicons name="camera-outline" size={RFValue(22)} color={"#121212"} />
              </View>
            </View>
            <View style={styles.formContainer}>
              <InputField label="Name" value={name} onChangeText={setName} placeholder="Enter your Full Name" />
              <InputField label="Gender" value={gender} onChangeText={setGender} placeholder="Enter your Gender" />
              <InputField label="Location" value={location} onChangeText={setLocation} placeholder="Enter your Location" />
              <InputField label="Profession" value={profession} onChangeText={setProfession} placeholder="Enter your Profession" />
              <InputField label="Bio" value={bio} onChangeText={setBio} placeholder="Enter your bio" multiline={true} height={100} />
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const InputField = ({ label, value, onChangeText, placeholder, multiline = false, height = 40 }) => (
  <View>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#7C7C7C"
      cursorColor="rgb(28,51,66)"
      multiline={multiline}
      style={[styles.input, { height }]}
      textAlignVertical={multiline ? "top" : "center"}
    />
  </View>
);

export default ProfileScreen

const styles = StyleSheet.create({
  cameraIcon: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: '#F5F5F5',
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 100,
    bottom: -18,
    right: 30,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  label: {
    paddingVertical: 8,
    paddingTop: 14,
  },
  input: {
    backgroundColor: '#DCDCDC',
    width: '100%',
    padding: 12,
    borderRadius: 8,
  }
});

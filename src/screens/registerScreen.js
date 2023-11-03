import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../constants/colors'
import { screenName } from '../constants/screenNames'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
      image: image
    }

    //send a POST request to the backend API to register the user
    axios.post("http://192.168.1.11:8000/register", user).then((response) => {
      console.log(response);
      Alert.alert(
        "Registration Successfull",
        "You have been registered successfully."
      );
      setName("");
      setEmail("");
      setPassword("");
      setImage("");
    }).catch((error) => {
      Alert.alert(
        "Registration Error",
        "An error occured while registering"
      );
      console.log("registration failed", error);
    })
  }



  return (
    <View style={{ flex: 1, backgroundColor: colors.white, padding: 10, alignItems: 'center' }}>
      <KeyboardAvoidingView>
        <View style={{ marginTop: 80, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: colors.blueVar1, fontSize: 20, fontWeight: '600' }}>Register</Text>
          <Text style={{ fontSize: 17, fontWeight: '600', marginTop: 15 }}>Register to Your Account</Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={{ fontSize: 18, color: colors.greyVar4, fontWeight: '600', color: colors.greyVar6 }}>Name</Text>
            <TextInput
              style={{ fontSize: email ? 16 : 16, borderBottomColor: colors.greyVar1, borderBottomWidth: 1, marginVertical: 10, width: 300 }}
              placeholder='Enter Your Name'
              placeholderTextColor={colors.black}
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <View>
            <Text style={{ fontSize: 18, color: colors.greyVar4, fontWeight: '600', color: colors.greyVar6 }}>Email</Text>
            <TextInput
              style={{ fontSize: email ? 16 : 16, borderBottomColor: colors.greyVar1, borderBottomWidth: 1, marginVertical: 10, width: 300 }}
              placeholder='Enter Your Email id'
              placeholderTextColor={colors.black}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <View>
            <Text style={{ fontSize: 18, color: colors.greyVar4, fontWeight: '600', color: colors.greyVar6 }}>Password</Text>
            <TextInput
              style={{ fontSize: email ? 16 : 16, borderBottomColor: colors.greyVar1, borderBottomWidth: 1, marginVertical: 10, width: 300 }}
              placeholder='Enter Your Password'
              placeholderTextColor={colors.black}
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <View>
            <Text style={{ fontSize: 18, color: colors.greyVar4, fontWeight: '600', color: colors.greyVar6 }}>Image</Text>
            <TextInput
              style={{ fontSize: email ? 16 : 16, borderBottomColor: colors.greyVar1, borderBottomWidth: 1, marginVertical: 10, width: 300 }}
              placeholder='Image'
              placeholderTextColor={colors.black}
              value={image}
              onChangeText={(text) => setImage(text)}
            />
          </View>
        </View>
        <Pressable onPress={handleRegister} style={{ backgroundColor: colors.blueVar1, width: 200, padding: 15, marginTop: 50, marginLeft: 'auto', marginRight: 'auto', borderRadius: 6 }}>
          <Text style={{ color: colors.white, fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Register</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate(screenName.Login)} style={{ marginTop: 15 }}>
          <Text style={{ textAlign: 'center', color: colors.greyVar8, fontSize: 16 }}>Already have an accout? Sign In</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})
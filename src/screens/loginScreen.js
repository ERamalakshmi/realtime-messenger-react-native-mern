import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../constants/colors'
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../constants/screenNames';

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: colors.white, padding: 10, alignItems: 'center' }}>
      <KeyboardAvoidingView>
        <View style={{ marginTop: 80, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: colors.blueVar1, fontSize: 20, fontWeight: '600' }}>Sign In</Text>
          <Text style={{ fontSize: 17, fontWeight: '600', marginTop: 15 }}>Sign In to Your Account</Text>
        </View>

        <View style={{ marginTop: 50 }}>
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
        <Pressable style={{ backgroundColor: colors.blueVar1, width: 200, padding: 15, marginTop : 50, marginLeft: 'auto', marginRight: 'auto', borderRadius : 6 }}>
          <Text style = {{color : colors.white, fontSize : 16, fontWeight : 'bold', textAlign : 'center'}}>Login</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate(screenName.Register)} style = {{marginTop : 15}}>
          <Text style = {{textAlign : 'center', color : colors.greyVar8, fontSize : 16 }}>Don't have an accout? Sign Up</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})
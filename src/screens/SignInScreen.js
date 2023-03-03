import { StyleSheet, Text, View, useWindowDimensions, Image, Alert,ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../src/components/customInputs/CustomInput'
import CustomButton from '../../src/components/customButtons/CustomButton'
import Logo from '../../assets/images/sahibandhu_logo.png'
import { EvilIcons } from '@expo/vector-icons';
import axios from 'axios'

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const [mobileNumber, setMobileNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation();


  const onSignInPressed = async () => {
   
    try {
      setIsLoading(true);
      const response = await axios.get(`https://devgoldloanapi.banksekure.com/CustomerApp/CustomerAppSecureOTP?RequestID=${mobileNumber}&MobileNo=${mobileNumber}&OTPType=1`);
      const data = response.data;
      console.log(data);
      if(data.msgCode==="S001"){
        Alert.alert("Successfully send OTP to you mobile number");
        navigation.navigate('Validation');
      }
    } catch (error) {
      // Handle errors here
      console.warn("error",error);
    } finally {
      setIsLoading(false);
    }
  }



  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode='contain'
      />

      <EvilIcons name="user" size={100} style={{ color: '#06519A' }} />
      <Text style={styles.LoginText}>Login / SignUp</Text>

      <CustomInput placeholder="+91" value={mobileNumber} setValue={setMobileNumber} keyboardType={'numeric'}  />
      <CustomButton text={"Sign In"} onPress={onSignInPressed} />
      {isLoading && <ActivityIndicator />}

    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 3,
    alignItems: 'center',
    padding: 20,
    margin: 38,

  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    height: 100,

  },
  LoginText: {
    fontSize: 20,
    color: '#06519A',
  }
})

export default SignInScreen



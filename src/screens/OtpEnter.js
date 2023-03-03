import { StyleSheet, Text, View, Button, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { TextInput } from 'react-native-gesture-handler'

const OtpEnter = () => {

  let lengthInput = 4;
  const textInput = useRef(null)
  const [internalVal, setInternalVal] = useState("")
  const defaultCountdown = 30
  const [countdown , setCountDown] = useState(defaultCountdown)
  const onChangeText = (val) => {
    setInternalVal(val)
  }
  useEffect(() => {
    textInput.focus()
  }, [])



  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={'padding'}
        style={styles.containerAvoiddingView}
      >
        <Text style={styles.titleStyle}>{"Input your OTP code sent Via SMS"}</Text>
        <View>
          <TextInput
            onChangeText={onChangeText}
            style={{ width: 0, height: 0 }}
            value={internalVal}
            maxLength={lengthInput}
            returnKeyType={'done'}
            keyboardType={"numberic"}
          />
          <View style={styles.containerInput} >
            {
              Array(lengthInput).fill().map((data, index) => (
                <View
                  key={index}
                  style={styles.cellView}>
                  <Text
                    onPress={() => textInput.focus()}
                    style={[styles.cellText, { borderBottomColor: index === internalVal.length ? '#FB6C6a' : '#234Db7' }]}>
                    {internalVal && internalVal.length > 0 ? internalVal[index] : ""}
                  </Text>
                </View>
              ))
            }

          </View>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity>
            <View style={styles.btnChangeNumber}>
              <Text style={styles.textChange}>Change Number</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.btnResend}>
              <Text style={styles.textResend}>Resend OTP (countdown) </Text>
            </View>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerAvoiddingView: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  titleStyle: {
    marginTop: 50,
    marginBottom: 50,
    fontSize: 16
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
  ,
  cellView: {
    paddingVertical: 11,
    width: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1.5,

  }
  ,
  cellText: {
    textAlign: 'center',
    fontSize: 16
  },
  bottomView: {
    flexDirection: 'row',
    flex: 1,
    // justifyContent:'flex-end',
    marginBottom: 50,
    alignItems: 'flex-end'

  },
  btnChangeNumber: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textChange: {
    color: '#234D87',
    alignItems: 'center',
    fontSize:16
  },
  btnResend: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  textResend: {
    alignItems: 'center',


  }
})
export default OtpEnter

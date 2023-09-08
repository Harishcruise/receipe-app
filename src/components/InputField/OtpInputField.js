import { View, Text,TextInput,Button, Pressable, TouchableOpacity} from 'react-native'
import React,{useState,useRef} from 'react'

const OtpInputField = () => {
const[code,setCode]=useState("");
const[pinReady,setPinReady]=useState(false);
const [inputContainerisFocused,setInputContainerisFocused]=useState(false);
const maxCodeLength=4;
    const textInputref=useRef(null);
  const handleBlur=()=>{
    setInputContainerisFocused(false);
  };
  
  const handleOnPress=()=>{
    setInputContainerisFocused(true);
    textInputref?.current?.focus();
    console.log("called");
  }
  const codeDigitsArray=new Array(maxCodeLength).fill(0);
  const toCodeDigitInput=(_value,index)=>{
    const emptyInputChar=" ";
    const digit=code[index]||emptyInputChar;

    return (
      <View key={index} className=" border-b-2 rounded-none min-w-[22%] px-5 border-dark-400">
        <Text className="text-lg text-center font-bold">{digit}</Text>
      </View>
    )
  }
  return (
    <View className='items-center mt-8'>
    
      <Pressable onPress={handleOnPress} className="w-[100%] flex-row justify-around">
      {codeDigitsArray.map(toCodeDigitInput)}
      </Pressable>
      <TextInput value={code} 
      onChangeText={setCode} 
      maxLength={maxCodeLength} 
      keyboardType='number-pad' 
      returnKeyType='done' 
      textContentType='oneTimeCode' 
      ref={textInputref}
      onBlur={handleBlur}
      className='w-[100%] bg-light-900 h-[54px] rounded-md text-justify text-lg pl-4 pb-[5px] hidden'
      />
   
    
  </View>
  )
}

export default OtpInputField
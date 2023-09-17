import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = ({onChange,value}) => {
  return (
    <View className='flex flex-row items-center w-[100%] h-12 rounded-md bg-light-200 justify-between px-3'>
      <TextInput value={value} onChange={onChange} cursorColor="#000000" placeholder='Search Recipes' style={{fontFamily:"Cabinet-Grotesk",fontSize:14,color:"#666666"}} className='w-[90%] h-[100%]' />
      <EvilIcons name="search" size={34} color="#666666" />
    </View>
  )
}

export default SearchBar
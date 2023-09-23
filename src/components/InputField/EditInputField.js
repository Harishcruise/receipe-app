import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { LabelGray } from '../../Typography'

const EditInputField = ({children,onBlur,onChangeText,onFocus,keyboardType,value,InputStyle}) => {
    const [edit, setEdit] = useState(false);
  return (
    <View style={{gap:8}} className='flex w-[100%] px-4'>
    <LabelGray style={{fontSize:14}}>{children}</LabelGray>
    <View style={{fontFamily:"Cabinet-Grotesk-Bold",backgroundColor:"#FFFFFF"}} className='flex flex-row justify-between bg-light-900 rounded-md items-center px-4'>
    <TextInput editable={edit} style={{fontFamily:"Cabinet-Grotesk-Bold",backgroundColor:"#FFFFFF"}} onFocus={onFocus} onBlur={onBlur} value={value} onChangeText={onChangeText}  keyboardType={keyboardType} selectionColor={'#666666'} className='w-[80%] bg-light-900 h-[54px] rounded-md text-justify text-lg pl-4 pb-[5px]'/>
      <TouchableOpacity onPress={()=>setEdit(!edit)}>
        <LabelGray>{edit?"Accept":"Edit"}</LabelGray>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default EditInputField
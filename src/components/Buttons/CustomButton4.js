import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { LabelBlack, LabelWhite } from '../../Typography';

const CustomButton4 = ({style ={width:"100%"}, children, onPress, logo }) => {
  

  return (
    <TouchableOpacity style={style} className="border-dark-200 border-[1px] flex-row  flex items-center justify-center rounded-md h-12  bg-light-800" onPress={onPress}> 
     {logo}
     <LabelBlack style={{fontSize:14}}>{children}</LabelBlack>
    </TouchableOpacity>
    
  );
};




export default CustomButton4;

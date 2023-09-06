import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { LabelWhite } from '../../Typography';

const CustomButton1 = ({style ={width:"100%"}, children, onPress,logo }) => {
  

  return (
    <TouchableOpacity style={style} className="flex flex-row items-center justify-center rounded-md h-12 bg-dark-200" onPress={onPress}> 
     {logo}
     <LabelWhite style={{fontSize:14}}>{children}</LabelWhite>
    </TouchableOpacity>
    
  );
};




export default CustomButton1;

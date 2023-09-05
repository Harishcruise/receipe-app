import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { LabelBlack, LabelWhite } from '../../Typography';

const CustomButton3 = ({style ={width:"100%"}, children, onPress }) => {
  

  return (
    <TouchableOpacity style={style} className="border-dark-200 border-[1px]  flex items-center justify-center rounded-md h-12" onPress={onPress}> 

     <LabelBlack style={{fontSize:14}}>{children}</LabelBlack>
    </TouchableOpacity>
    
  );
};




export default CustomButton3;
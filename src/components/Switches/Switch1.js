import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';
import { LabelGray } from '../../Typography';

const Switch1 = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View className="flex flex-row items-center">
        <LabelGray style={{color:"#060813"}}>Veg</LabelGray>
      <Switch
        
        trackColor={{ false: '#E0E0E0', true: '#E0E0E0' }} // Set trackColor to gray
        thumbColor={isEnabled ? '#0E8345' : '#0E8345'} // Set thumbColor to green when enabled
        ios_backgroundColor="#f4f3f4"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default Switch1;

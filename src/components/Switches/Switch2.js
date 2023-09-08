import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';
import { LabelGray } from '../../Typography';

const Switch2 = ({children}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View className="flex flex-row items-center">
        <LabelGray style={{color:"#060813"}}>{children}</LabelGray>
      <Switch
        
        trackColor={{ false: '#E0E0E0', true: '#E0E0E0' }} // Set trackColor to gray
        thumbColor={isEnabled ? '#666666' : '#666666'} // Set thumbColor to green when enabled
        ios_backgroundColor="#f4f3f4"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default Switch2;

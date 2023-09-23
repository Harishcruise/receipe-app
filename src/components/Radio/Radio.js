import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

const Radio = () => {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <View style={styles.container}>
      <RadioButton
        value="option"
        status={enabled ? 'checked' : 'unchecked'}
        onPress={() => setEnabled(!enabled)}
        color={enabled ? '#068BEE' : 'gray'} // Change color to blue when enabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Radio;
